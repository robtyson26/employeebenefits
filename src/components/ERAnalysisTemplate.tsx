import React from 'react';
import { Activity, Clock, DollarSign, Users, Target, MessageSquare } from 'lucide-react';

export function ERAnalysisTemplate() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Activity className="h-6 w-6 mr-2 text-indigo-600" />
          Current Benchmarks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              <li>Average ER Visits: 180 per 1,000 members</li>
              <li>Avoidable Visits: 37% of total</li>
              <li>Average Cost: $2,200 per visit</li>
              <li>After-Hours: 45% of visits</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Clock className="h-6 w-6 mr-2 text-indigo-600" />
          Visit Classification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Primary Categories</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Emergency (EMTALA)
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Urgent
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Non-urgent
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Follow-up
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Timing Analysis</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Day of week patterns
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Time of day distribution
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Seasonal variations
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Holiday impact
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Target className="h-6 w-6 mr-2 text-indigo-600" />
          Alternative Care Options
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Urgent Care</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Location mapping
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Hours of operation
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Service capabilities
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Telemedicine</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> 24/7 availability
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Utilization rates
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Resolution rates
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Retail Clinics</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Accessibility
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Service scope
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Cost structure
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <MessageSquare className="h-6 w-6 mr-2 text-indigo-600" />
          Action Planning
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Communication Strategy</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Member education
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Provider engagement
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Access guidance
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Decision support
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Program Implementation</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Network optimization
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Benefit alignment
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Navigation services
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" /> Care coordination
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <h4 className="font-semibold mb-2">Need Implementation Support?</h4>
        <p>Contact our team for personalized assistance:</p>
        <ul className="mt-2">
          <li>Email: contact@benefitsplus.com</li>
          <li>Phone: (555) 123-4567</li>
        </ul>
      </div>
    </div>
  );
}