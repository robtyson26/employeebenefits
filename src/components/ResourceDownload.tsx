import React, { useState } from 'react';
import { FileDown, Calculator, FileText, PieChart } from 'lucide-react';
import { BenefitsCostCalculator } from './BenefitsCostCalculator';
import { HealthcareCostGuide } from './HealthcareCostGuide';
import { ERAnalysisTemplate } from './ERAnalysisTemplate';

interface Resource {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'calculator' | 'guide' | 'template';
}

const resources: Resource[] = [
  {
    title: "Benefits Cost Calculator",
    description: "Interactive tool to analyze and compare your current benefits costs",
    icon: <Calculator className="h-6 w-6" />,
    type: 'calculator'
  },
  {
    title: "Healthcare Cost Guide",
    description: "Comprehensive guide to understanding and optimizing healthcare costs",
    icon: <FileText className="h-6 w-6" />,
    type: 'guide'
  },
  {
    title: "ER Utilization Analysis Template",
    description: "Template to track and analyze emergency room usage patterns",
    icon: <PieChart className="h-6 w-6" />,
    type: 'template'
  }
];

export function ResourceDownload() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);

  const handleResourceClick = (resource: Resource) => {
    // Track event
    gtag('event', 'resource_view', {
      'resource_name': resource.title
    });
    
    // Show appropriate content
    switch(resource.type) {
      case 'calculator':
        setShowCalculator(true);
        break;
      case 'guide':
        setShowGuide(true);
        break;
      case 'template':
        setShowTemplate(true);
        break;
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-xl p-8 mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Free Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.title} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {resource.icon}
                <h3 className="text-lg font-semibold ml-2">{resource.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <button
                onClick={() => handleResourceClick(resource)}
                className="flex items-center text-indigo-600 hover:text-indigo-800"
              >
                <FileDown className="h-5 w-5 mr-2" />
                View Resource
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {showCalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Benefits Cost Calculator</h2>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <BenefitsCostCalculator />
            </div>
          </div>
        </div>
      )}

      {showGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Healthcare Cost Guide</h2>
              <button
                onClick={() => setShowGuide(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <HealthcareCostGuide />
            </div>
          </div>
        </div>
      )}

      {showTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">ER Utilization Analysis Template</h2>
              <button
                onClick={() => setShowTemplate(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <ERAnalysisTemplate />
            </div>
          </div>
        </div>
      )}
    </>
  );
}