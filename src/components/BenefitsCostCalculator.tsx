import React, { useState } from 'react';
import { Calculator, DollarSign, Users, Briefcase, Activity, Heart, Shield } from 'lucide-react';

interface CalculatorInputs {
  employeeCount: number;
  currentMonthlyPremium: number;
  currentDeductible: number;
  currentOutOfPocket: number;
  erVisitsPerYear: number;
  chronicConditionPercentage: number;
  preventiveCareUtilization: number;
  telemedicineUtilization: number;
  rateIncreases: {
    year1: number | '';
    year2: number | '';
    year3: number | '';
    year4: number | '';
  };
  hasMedicalClaimsAudit: boolean;
  hasChronicDiseaseProgram: boolean;
}

const initialState: CalculatorInputs = {
  employeeCount: 0,
  currentMonthlyPremium: 0,
  currentDeductible: 0,
  currentOutOfPocket: 0,
  erVisitsPerYear: 0,
  chronicConditionPercentage: 0,
  preventiveCareUtilization: 0,
  telemedicineUtilization: 0,
  rateIncreases: {
    year1: '',
    year2: '',
    year3: '',
    year4: ''
  },
  hasMedicalClaimsAudit: false,
  hasChronicDiseaseProgram: false
};

const industryBenchmarks = {
  monthlyPremiumPerEmployee: 550,
  deductible: 1500,
  outOfPocket: 4000,
  erVisitsPer100: 15,
  chronicConditionPercentage: 30,
  preventiveCareTarget: 80,
  telemedicineTarget: 25,
  averageRateIncrease: 6.5,
  historicalRateIncreasesAvg: 6.0
};

export function BenefitsCostCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialState);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    if (name.startsWith('rateIncreases.')) {
      const year = name.split('.')[1];
      setInputs(prev => ({
        ...prev,
        rateIncreases: {
          ...prev.rateIncreases,
          [year]: value === '' ? '' : parseFloat(value)
        }
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? e.target.checked : parseFloat(value) || 0
      }));
    }
  };

  const calculateScores = () => {
    const scores = {
      costScore: 0,
      utilizationScore: 0,
      preventiveScore: 0,
      overallScore: 0,
      potentialSavings: 0,
      recommendations: [] as string[]
    };

    // Cost Efficiency Score (40% of total)
    const premiumPerEmployee = inputs.currentMonthlyPremium / inputs.employeeCount;
    const premiumScore = (industryBenchmarks.monthlyPremiumPerEmployee / premiumPerEmployee) * 40;
    scores.costScore = Math.min(40, premiumScore);

    if (premiumPerEmployee > industryBenchmarks.monthlyPremiumPerEmployee) {
      scores.recommendations.push("Consider plan redesign to optimize premium costs");
      scores.potentialSavings += (premiumPerEmployee - industryBenchmarks.monthlyPremiumPerEmployee) * inputs.employeeCount * 12;
    }

    // Rate Increase Impact
    const validRates = Object.values(inputs.rateIncreases)
      .filter((rate): rate is number => typeof rate === 'number');
    const avgRateIncrease = validRates.length > 0 
      ? validRates.reduce((a, b) => a + b, 0) / validRates.length 
      : 0;

    if (avgRateIncrease > industryBenchmarks.averageRateIncrease) {
      scores.recommendations.push(`Your ${validRates.length}-year average rate increase (${avgRateIncrease.toFixed(1)}%) is above industry average (${industryBenchmarks.averageRateIncrease}%). Consider cost containment strategies.`);
      scores.potentialSavings += (inputs.currentMonthlyPremium * (avgRateIncrease - industryBenchmarks.averageRateIncrease) / 100) * 12;
    }

    // Medical Claims Audit Impact
    if (!inputs.hasMedicalClaimsAudit) {
      scores.recommendations.push("Implement regular medical claims audits to identify potential savings and billing errors");
      scores.potentialSavings += inputs.currentMonthlyPremium * 0.03 * 12;
    }

    // Chronic Disease Management Program Impact
    if (!inputs.hasChronicDiseaseProgram) {
      scores.recommendations.push("Implement a chronic disease management program to reduce long-term healthcare costs");
      scores.potentialSavings += inputs.currentMonthlyPremium * 0.05 * 12;
    }

    // Utilization Score (30% of total)
    const erVisitsPer100 = (inputs.erVisitsPerYear / inputs.employeeCount) * 100;
    const utilizationScore = ((industryBenchmarks.erVisitsPer100 / erVisitsPer100) * 15) +
      ((inputs.telemedicineUtilization / industryBenchmarks.telemedicineTarget) * 15);
    scores.utilizationScore = Math.min(30, utilizationScore);

    if (erVisitsPer100 > industryBenchmarks.erVisitsPer100) {
      scores.recommendations.push("Implement ER alternative programs and education");
    }
    if (inputs.telemedicineUtilization < industryBenchmarks.telemedicineTarget) {
      scores.recommendations.push("Boost telemedicine adoption through awareness and incentives");
    }

    // Preventive Care Score (30% of total)
    const preventiveScore = (inputs.preventiveCareUtilization / industryBenchmarks.preventiveCareTarget) * 30;
    scores.preventiveScore = Math.min(30, preventiveScore);

    if (inputs.preventiveCareUtilization < industryBenchmarks.preventiveCareTarget) {
      scores.recommendations.push("Enhance preventive care program participation");
    }

    // Calculate Overall Score
    scores.overallScore = Math.round(scores.costScore + scores.utilizationScore + scores.preventiveScore);

    return scores;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const scores = calculateScores();

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">Benefits Optimization Calculator</h2>
      </div>

      <form onSubmit={handleCalculate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Employees
            </label>
            <div className="relative">
              <Users className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="number"
                name="employeeCount"
                value={inputs.employeeCount || ''}
                onChange={handleInputChange}
                className="pl-10 w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Monthly Premium (Total)
            </label>
            <div className="relative">
              <DollarSign className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="number"
                name="currentMonthlyPremium"
                value={inputs.currentMonthlyPremium || ''}
                onChange={handleInputChange}
                className="pl-10 w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Rate Increases
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((year) => (
                <div key={year}>
                  <label className="block text-sm text-gray-600 mb-1">
                    {year} Year{year === 1 ? '' : 's'} Ago
                  </label>
                  <div className="relative">
                    <Activity className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="number"
                      name={`rateIncreases.year${year}`}
                      value={inputs.rateIncreases[`year${year}` as keyof typeof inputs.rateIncreases]}
                      onChange={handleInputChange}
                      placeholder="Enter percentage"
                      className="pl-10 w-full p-2 pr-8 border rounded-md"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-3 text-gray-500">%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medical Claims Audit Status
            </label>
            <div className="relative flex items-center mt-2">
              <input
                type="checkbox"
                name="hasMedicalClaimsAudit"
                checked={inputs.hasMedicalClaimsAudit}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Claims are regularly audited</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Chronic Disease Management
            </label>
            <div className="relative flex items-center mt-2">
              <input
                type="checkbox"
                name="hasChronicDiseaseProgram"
                checked={inputs.hasChronicDiseaseProgram}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Have chronic disease management program</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Deductible
            </label>
            <div className="relative">
              <Shield className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="number"
                name="currentDeductible"
                value={inputs.currentDeductible || ''}
                onChange={handleInputChange}
                className="pl-10 w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Annual ER Visits
            </label>
            <div className="relative">
              <Activity className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="number"
                name="erVisitsPerYear"
                value={inputs.erVisitsPerYear || ''}
                onChange={handleInputChange}
                className="pl-10 w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preventive Care Utilization
            </label>
            <div className="relative">
              <Heart className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="number"
                name="preventiveCareUtilization"
                value={inputs.preventiveCareUtilization || ''}
                onChange={handleInputChange}
                placeholder="Enter percentage"
                className="pl-10 w-full p-2 pr-8 border rounded-md"
                min="0"
                max="100"
                required
              />
              <span className="absolute right-3 top-3 text-gray-500">%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telemedicine Utilization
            </label>
            <div className="relative">
              <Briefcase className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="number"
                name="telemedicineUtilization"
                value={inputs.telemedicineUtilization || ''}
                onChange={handleInputChange}
                placeholder="Enter percentage"
                className="pl-10 w-full p-2 pr-8 border rounded-md"
                min="0"
                max="100"
                required
              />
              <span className="absolute right-3 top-3 text-gray-500">%</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Calculate Optimization Score
        </button>
      </form>

      {showResults && (
        <div className="mt-8 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Benefits Optimization Score: {scores.overallScore}/100</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md shadow">
                <p className="text-sm text-gray-600">Cost Efficiency</p>
                <p className="text-2xl font-bold text-indigo-600">{Math.round(scores.costScore)}/40</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <p className="text-sm text-gray-600">Utilization Efficiency</p>
                <p className="text-2xl font-bold text-indigo-600">{Math.round(scores.utilizationScore)}/30</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <p className="text-sm text-gray-600">Preventive Care</p>
                <p className="text-2xl font-bold text-indigo-600">{Math.round(scores.preventiveScore)}/30</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Recommendations:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {scores.recommendations.map((rec, index) => (
                  <li key={index} className="text-gray-700">{rec}</li>
                ))}
              </ul>
            </div>

            {scores.potentialSavings > 0 && (
              <div className="mt-6 p-4 bg-green-50 rounded-md">
                <p className="text-green-700">
                  Estimated Annual Savings Potential: ${Math.round(scores.potentialSavings).toLocaleString()}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              gtag('event', 'calculator_completion', {
                'score': scores.overallScore,
                'potential_savings': scores.potentialSavings
              });
              const userEmail = prompt("Enter your email to receive a detailed analysis:");
              if (userEmail) {
                alert("Thank you! A detailed analysis will be sent to your email shortly.");
                gtag('event', 'calculator_lead', {
                  'email_provided': true
                });
              }
            }}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Detailed Analysis
          </button>
        </div>
      )}
    </div>
  );
}