import React from "react";
import {
  ArrowRight,
  Github,
  Edit3,
  Settings,
  CheckCircle,
  Shield,
  AlertTriangle,
  BarChart3,
  Sparkles,
  Users,
  Zap,
  Home,
} from "lucide-react";

import { Typewriter } from "react-simple-typewriter";

interface LandingPageProps {
  onNavigateToDemo: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToDemo }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Content Governance
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              AI-powered content
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                governance, made simple
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate, review, and validate corporate content using smart
              agents that check for tone, bias, compliance, and legal issues.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onNavigateToDemo}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center"
            >
              Try the Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </button> */}
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-4 border-b border-slate-200 dark:border-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-left space-y-4">
                  <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-2/3"></div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Three simple steps to ensure your content meets all governance
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Edit3 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Enter a prompt
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Describe the content you want to generate, from marketing copy
                to technical documentation.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Generate & review content
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our AI generates content while simultaneously running governance
                checks in real-time.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Get governance checklist
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Receive detailed feedback on tone, bias, compliance, and legal
                considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to ensure your content meets the highest
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Tone & Bias Review
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Automatically detect and flag potential bias, ensuring inclusive
                and appropriate tone.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Legal & Compliance Checks
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Verify content against legal requirements and industry
                compliance standards.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Agent Feedback Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Get detailed insights and recommendations from our AI governance
                agents.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Easy Export & Governance Logs
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Export approved content and maintain comprehensive governance
                audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Experience the power of AI-driven content governance with our
            interactive demo
          </p>

          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-4 border-b border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    GenAI Governance Assistant Demo
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-5/6"></div>
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="h-3 bg-blue-200 dark:bg-blue-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                      <div className="h-3 bg-green-200 dark:bg-green-700 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                      <div className="h-3 bg-yellow-200 dark:bg-yellow-700 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                      <div className="h-3 bg-green-200 dark:bg-green-700 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onNavigateToDemo}
              className="absolute inset-0 bg-blue-600/0 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 transition-colors duration-300 rounded-2xl flex items-center justify-center group"
            >
              <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                Try Interactive Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-600 dark:text-slate-300 mb-4 md:mb-0">
              Built with ❤️ using React + TypeScript
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <div className="flex flex-row gap-2 justify-between">
                  <Home className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  Home
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
