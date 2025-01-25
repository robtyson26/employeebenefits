import React from 'react';
import { TrendingUp, DollarSign, Brain, Activity, Monitor, Building, ChartBar, CheckSquare } from 'lucide-react';

export function HealthcareCostGuide() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <TrendingUp className="h-6 w-6 mr-2 text-indigo-600" />
          Market Trends & Benchmarks (2024)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Premium Trends</h4>
            <ul className="space-y-2">
              <li>Single Coverage: $8,435/year (+5.2% YoY)</li>
              <li>Family Coverage: $23,968/year (+6.1% YoY)</li>
              <li>Employee Contributions: 21% single, 28% family</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Deductibles & Out-of-Pocket</h4>
            <ul className="space-y-2">
              <li>Average Deductible: $1,735</li>
              <li>Out-of-Pocket Maximum: $4,035</li>
              <li>HSA Adoption: 32% of employers</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <DollarSign className="h-6 w-6 mr-2 text-indigo-600" />
          Key Cost Drivers & Solutions
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Specialty Drugs (↑18.2% YoY)</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Implement biosimilar programs</li>
              <li>Prior authorization optimization</li>
              <li>Site-of-care management</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Mental Health (↑35% utilization)</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Virtual-first solutions</li>
              <li>Collaborative care models</li>
              <li>Preventive screening</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Monitor className="h-6 w-6 mr-2 text-indigo-600" />
          Emerging Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Virtual Care</h4>
            <ul className="space-y-2">
              <li>82% utilization growth</li>
              <li>$120 average savings/visit</li>
              <li>92% satisfaction rate</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Centers of Excellence</h4>
            <ul className="space-y-2">
              <li>28% cost reduction</li>
              <li>23% fewer complications</li>
              <li>Key procedures: MSK, Cardiac</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Advanced Analytics</h4>
            <ul className="space-y-2">
              <li>Predictive modeling</li>
              <li>Risk stratification</li>
              <li>Real-time intervention</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <CheckSquare className="h-6 w-6 mr-2 text-indigo-600" />
          Implementation Checklist
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" /> Data analysis & benchmarking
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" /> Strategy development
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" /> Vendor evaluation
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" /> Communication planning
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" /> Program launch
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" /> Monitoring & optimization
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <h4 className="font-semibold mb-2">Get Personalized Analysis</h4>
        <p>Contact us for a detailed review of your benefits program:</p>
        <ul className="mt-2">
          <li>Email: contact@benefitsplus.com</li>
          <li>Phone: (555) 123-4567</li>
        </ul>
      </div>
    </div>
  );
}