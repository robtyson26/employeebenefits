import React, { useState } from 'react';
import { 
  Building2, Users, Calculator, Mail, Phone, User, Briefcase, 
  LineChart, Activity, Stethoscope, Network, Microscope, 
  DollarSign, Heart, AlertCircle, ArrowDown, Shield,
  Presentation, Users2, Lightbulb, Target
} from 'lucide-react';
import { ResourceDownload } from './components/ResourceDownload';
import { SocialProof } from './components/SocialProof';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    employeeCount: '',
    industry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gtag('event', 'form_submission', {
      'form_name': 'benefits_analysis',
      'company_size': formData.employeeCount,
      'industry': formData.industry
    });
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BenefitsPlus</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['cost-transparency', 'health-management', 'ER-utilization', 'networks'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {section.split('-').map(word => word === 'ER' ? 'ER' : word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Employee Benefits
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Data-driven insights for cost optimization and better health outcomes
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Benefits Analysis
            </button>
            <div className="mt-12">
              <ArrowDown className="h-8 w-8 mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Cost Transparency Section */}
      <section id="cost-transparency" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DollarSign className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Cost Transparency</h2>
            <p className="text-xl text-gray-600">Understand and optimize your healthcare spending</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Presentation className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Claims Analysis</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Detailed claims breakdown</li>
                <li>• Cost trend analysis</li>
                <li>• Utilization patterns</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Calculator className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Benchmarking</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Industry comparisons</li>
                <li>• Regional cost analysis</li>
                <li>• Peer group benchmarks</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <LineChart className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pharmacy Benefits</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Drug cost analysis</li>
                <li>• Formulary optimization</li>
                <li>• Rebate tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health Management Section */}
      <section id="health-management" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heart className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Chronic Health Management</h2>
            <p className="text-xl text-gray-600">Proactive programs for better health outcomes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Activity className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Condition Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Personalized care plans</li>
                <li>• Progress monitoring</li>
                <li>• Health coaching</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Users2 className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wellness Programs</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Health assessments</li>
                <li>• Lifestyle coaching</li>
                <li>• Incentive programs</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Lightbulb className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prevention Strategy</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Early detection</li>
                <li>• Risk assessment</li>
                <li>• Educational resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ER Utilization Section */}
      <section id="er-utilization" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building2 className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">ER Utilization Optimization</h2>
            <p className="text-xl text-gray-600">Smart strategies for emergency care management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Target className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Usage Analysis</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Pattern identification</li>
                <li>• Cost impact analysis</li>
                <li>• Utilization tracking</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Shield className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Alternative Care</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Urgent care networks</li>
                <li>• Telemedicine options</li>
                <li>• After-hours care</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Stethoscope className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education Programs</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Care decision support</li>
                <li>• Resource guidance</li>
                <li>• Emergency protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Networks Section */}
      <section id="networks" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Network className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Specialized Healthcare Networks</h2>
            <p className="text-xl text-gray-600">Access to quality care at optimized costs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Building2 className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Provider Networks</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Quality metrics</li>
                <li>• Cost efficiency</li>
                <li>• Access analysis</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Microscope className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Centers of Excellence</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Specialized procedures</li>
                <li>• Quality outcomes</li>
                <li>• Cost bundling</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Network Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Geographic analysis</li>
                <li>• Utilization patterns</li>
                <li>• Access standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Benefits Analysis</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Free Analysis
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Resource Downloads Section */}
      <ResourceDownload />

      {/* Social Proof Section */}
      <SocialProof />

      <footer className="bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">Transforming employee benefits through data-driven insights and cost optimization.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="https://worksitex.com" className="text-indigo-600 hover:text-indigo-800">Website</a></li>
                <li><a href="https://linkedin.com/company/your-company" className="text-indigo-600 hover:text-indigo-800">LinkedIn</a></li>
                <li><a href="https://g.page/your-company" className="text-indigo-600 hover:text-indigo-800">Google Business</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Benefits Calculator</a></li>
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Cost Guide</a></li>
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: contact@worksitex.com</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            <p>&copy; 2024 BenefitsPlus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;