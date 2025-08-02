"use client";
import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertTriangle,
  XCircle,
  FileText,
  BarChart3,
  Download,
  RefreshCw,
  Sparkles,
  ArrowLeft,
  Clock,
  Shield,
  Users,
  Zap,
  Eye,
  Copy,
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface DemoAppProps {
  onNavigateToLanding: () => void;
}

const DemoApp: React.FC<DemoAppProps> = ({ onNavigateToLanding }) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [activeTab, setActiveTab] = useState<
    "checklist" | "feedback" | "analytics"
  >("checklist");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [generatedTime, setGeneratedTime] = useState("");

  const dummyContent = `Today, we're excited to announce the launch of our revolutionary new product line that will transform how businesses approach digital transformation. This groundbreaking solution combines cutting-edge AI technology with enterprise-grade security to deliver unprecedented value to our customers.

Our team has worked tirelessly to ensure this product meets the highest standards of quality and innovation. We believe this represents a significant milestone in our company's journey to become the leading provider of AI-powered business solutions.

The new features include advanced analytics, real-time monitoring, and seamless integration capabilities that will help organizations streamline their operations and drive growth in today's competitive marketplace.`;

  const governanceResults = [
    {
      category: "Tone Analysis",
      status: "passed",
      icon: Users,
      color: "green",
      score: 92,
      message: "Professional and engaging tone detected",
      details:
        "Content maintains appropriate business tone throughout with confident language",
      suggestions: [
        "Maintain current professional tone",
        "Consider adding more specific examples",
      ],
    },
    {
      category: "Bias Detection",
      status: "warning",
      icon: AlertTriangle,
      color: "yellow",
      score: 78,
      message: "Minor bias concerns identified",
      details: "Some language could be more inclusive and neutral",
      suggestions: [
        'Replace "tirelessly" with "diligently"',
        "Use more inclusive pronouns",
        "Avoid absolute statements",
      ],
    },
    {
      category: "Legal Compliance",
      status: "passed",
      icon: Shield,
      color: "green",
      score: 95,
      message: "No legal issues detected",
      details:
        "Content complies with standard legal and regulatory requirements",
      suggestions: ["Content is legally compliant", "No action required"],
    },
    {
      category: "Brand Guidelines",
      status: "failed",
      icon: XCircle,
      color: "red",
      score: 45,
      message: "Brand guidelines violation detected",
      details: "Multiple instances of non-approved superlative language",
      suggestions: [
        'Replace "revolutionary" with "innovative"',
        "Use approved brand terminology",
        "Follow brand voice guidelines",
      ],
    },
  ];

  const analyticsData = [
    { label: "Overall Score", value: "77%", trend: "+5%", color: "blue" },
    { label: "Compliance Rate", value: "75%", trend: "+12%", color: "green" },
    { label: "Issues Found", value: "3", trend: "-2", color: "red" },
    {
      label: "Processing Time",
      value: "2.3s",
      trend: "-0.5s",
      color: "purple",
    },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    const startTime = Date.now();

    setIsGenerating(true);
    setHasGenerated(false);
    setGeneratedContent("");
    setWordCount(0);
    setCharCount(0);
    setGeneratedTime("");

    try {
      const response = await fetch("/api/v1/user-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      const endTime = Date.now();
      const durationInSeconds = ((endTime - startTime) / 1000).toFixed(2);

      if (data.content) {
        setGeneratedContent(data.content);
        setWordCount(data.metadata.wordCount || 0);
        setCharCount(data.metadata.charCount || 0);
        setGeneratedTime(durationInSeconds || "");
        setHasGenerated(true);
      } else {
        console.error("API error or missing content", data);
        setGeneratedContent("⚠️ Failed to generate content. Please try again.");
        setHasGenerated(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setGeneratedContent("⚠️ Network error. Please try again later.");
      setHasGenerated(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setPrompt("");
    setGeneratedContent("");
    setHasGenerated(false);
    setIsGenerating(false);
    setActiveTab("checklist");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed":
        return "text-emerald-600 dark:text-emerald-400";
      case "warning":
        return "text-amber-600 dark:text-amber-400";
      case "failed":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-slate-600 dark:text-slate-400";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "passed":
        return "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800";
      case "warning":
        return "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800";
      case "failed":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
      default:
        return "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-600 dark:text-emerald-400";
    if (score >= 70) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-4 h-4 mr-2" />
            Interactive Demo - Real-time AI Governance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
            GenAI Governance Assistant
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI-driven content governance with real-time
            analysis, compliance checking, and intelligent feedback
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-8">
          {/* Left Column - Enhanced Input */}
          <div className="xl:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Content Prompt
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Describe the content you want to generate
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your content prompt here... (e.g., 'Write a product announcement for our new AI platform targeting enterprise customers')"
                    className="w-full h-40 p-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-all duration-300 text-sm leading-relaxed"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400">
                    {prompt.length}/500
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating}
                    className="flex-1 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Generate & Analyze
                      </>
                    )}
                  </button>
                  {hasGenerated && (
                    <button
                      onClick={handleReset}
                      className="px-6 py-4 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {isGenerating && (
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4 mr-2" />
                      Processing your request...
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Examples */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Quick Examples
              </h3>
              <div className="space-y-2">
                {[
                  "Write a press release announcing our Q4 earnings",
                  "Create marketing copy for our new AI product launch",
                  "Draft an internal memo about remote work policy changes",
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="w-full text-left p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                  >
                    "{example}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Generated Content */}
          <div className="xl:col-span-1 space-y-6">
            {hasGenerated ? (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 p-6 border-b border-slate-200 dark:border-slate-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                          Generated Content
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          AI-generated content ready for review
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={copyToClipboard}
                        className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="flex items-center px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium">
                        <Download className="w-4 h-4 mr-1" />
                        Export
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-xl text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200 dark:border-slate-600">
                      {generatedContent
                        .split("\n\n")
                        .map((paragraph, index) => (
                          <p key={index} className={index > 0 ? "mt-4" : ""}>
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>

                  {/* Content Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {wordCount}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Words
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {charCount}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Characters
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {generatedTime} s
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Generated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Ready to Generate
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                  Enter a prompt and click generate to see AI-powered content
                  creation in action
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Fast Generation
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    Secure Processing
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Enhanced Analysis */}
          <div className="xl:col-span-1 space-y-6">
            {hasGenerated ? (
              <>
                {/* Tab Navigation */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="border-b border-slate-200 dark:border-slate-600">
                    <nav className="flex">
                      {[
                        {
                          id: "checklist",
                          label: "Governance",
                          icon: BarChart3,
                        },
                        {
                          id: "feedback",
                          label: "AI Feedback",
                          icon: Sparkles,
                        },
                        {
                          id: "analytics",
                          label: "Analytics",
                          icon: TrendingUp,
                        },
                      ].map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex-1 flex items-center justify-center px-4 py-4 text-sm font-medium transition-colors ${
                              activeTab === tab.id
                                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600"
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                            }`}
                          >
                            <IconComponent className="w-4 h-4 mr-2" />
                            {tab.label}
                          </button>
                        );
                      })}
                    </nav>
                  </div>

                  <div className="p-6">
                    {/* Governance Checklist Tab */}
                    {activeTab === "checklist" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Governance Analysis
                          </h3>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            4 checks completed
                          </div>
                        </div>

                        {governanceResults.map((result, index) => {
                          const IconComponent = result.icon;
                          return (
                            <div
                              key={index}
                              className={`p-5 rounded-xl border transition-all duration-300 hover:shadow-md ${getStatusBg(
                                result.status
                              )}`}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                  <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                                      result.status === "passed"
                                        ? "bg-emerald-100 dark:bg-emerald-900/30"
                                        : result.status === "warning"
                                        ? "bg-amber-100 dark:bg-amber-900/30"
                                        : "bg-red-100 dark:bg-red-900/30"
                                    }`}
                                  >
                                    <IconComponent
                                      className={`w-5 h-5 ${getStatusColor(
                                        result.status
                                      )}`}
                                    />
                                  </div>
                                  <div>
                                    <span className="font-semibold text-slate-900 dark:text-white">
                                      {result.category}
                                    </span>
                                    <div className="flex items-center mt-1">
                                      <span
                                        className={`text-lg font-bold mr-2 ${getScoreColor(
                                          result.score
                                        )}`}
                                      >
                                        {result.score}%
                                      </span>
                                      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                                        <div
                                          className={`h-full transition-all duration-500 ${
                                            result.score >= 90
                                              ? "bg-emerald-500"
                                              : result.score >= 70
                                              ? "bg-amber-500"
                                              : "bg-red-500"
                                          }`}
                                          style={{ width: `${result.score}%` }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span
                                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                    result.status === "passed"
                                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                                      : result.status === "warning"
                                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                                      : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                                  }`}
                                >
                                  {result.status === "passed"
                                    ? "Passed"
                                    : result.status === "warning"
                                    ? "Warning"
                                    : "Failed"}
                                </span>
                              </div>
                              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                                {result.message}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                                {result.details}
                              </p>
                              <div className="space-y-1">
                                {result.suggestions.map((suggestion, idx) => (
                                  <div
                                    key={idx}
                                    className="text-xs text-slate-600 dark:text-slate-400 flex items-start"
                                  >
                                    <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    {suggestion}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* AI Feedback Tab */}
                    {activeTab === "feedback" && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          AI Agent Insights
                        </h3>

                        <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                          <div className="flex items-center mb-3">
                            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                            <h4 className="font-semibold text-blue-900 dark:text-blue-300">
                              Overall Assessment
                            </h4>
                          </div>
                          <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                            Content shows strong professional tone and legal
                            compliance. Primary concerns center around brand
                            guideline adherence and minor bias considerations.
                            The writing style is engaging but needs refinement
                            to align with corporate standards.
                          </p>
                        </div>

                        <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                          <div className="flex items-center mb-3">
                            <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" />
                            <h4 className="font-semibold text-amber-900 dark:text-amber-300">
                              Priority Recommendations
                            </h4>
                          </div>
                          <ul className="text-sm text-amber-800 dark:text-amber-300 space-y-2">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Replace "revolutionary\" with "innovative\" or
                              "advanced\" to align with brand guidelines
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Consider more inclusive language when referencing
                              team achievements
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Add specific metrics or data points to support
                              value propositions
                            </li>
                          </ul>
                        </div>

                        <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                          <div className="flex items-center mb-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                            <h4 className="font-semibold text-emerald-900 dark:text-emerald-300">
                              Strengths Identified
                            </h4>
                          </div>
                          <ul className="text-sm text-emerald-800 dark:text-emerald-300 space-y-2">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Clear, professional communication style
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Strong legal and compliance adherence
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Appropriate technical depth for target audience
                            </li>
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-600">
                          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                            <Eye className="w-4 h-4 mr-2" />
                            Confidence Score: 87%
                          </div>
                          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                            View Detailed Analysis →
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Analytics Tab */}
                    {activeTab === "analytics" && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          Performance Analytics
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                          {analyticsData.map((metric, index) => (
                            <div
                              key={index}
                              className="p-4 bg-slate-50 dark:bg-slate-700 rounded-xl"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                  {metric.label}
                                </span>
                                <span
                                  className={`text-xs font-semibold ${
                                    metric.trend.startsWith("+")
                                      ? "text-emerald-600 dark:text-emerald-400"
                                      : metric.trend.startsWith("-") &&
                                        metric.label === "Issues Found"
                                      ? "text-emerald-600 dark:text-emerald-400"
                                      : "text-red-600 dark:text-red-400"
                                  }`}
                                >
                                  {metric.trend}
                                </span>
                              </div>
                              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-5 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-xl">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                            Processing Breakdown
                          </h4>
                          <div className="space-y-3">
                            {[
                              {
                                step: "Content Generation",
                                time: "1.2s",
                                status: "completed",
                              },
                              {
                                step: "Tone Analysis",
                                time: "0.4s",
                                status: "completed",
                              },
                              {
                                step: "Bias Detection",
                                time: "0.3s",
                                status: "completed",
                              },
                              {
                                step: "Legal Review",
                                time: "0.2s",
                                status: "completed",
                              },
                              {
                                step: "Brand Compliance",
                                time: "0.2s",
                                status: "completed",
                              },
                            ].map((step, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between text-sm"
                              >
                                <div className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                                  <span className="text-slate-700 dark:text-slate-300">
                                    {step.step}
                                  </span>
                                </div>
                                <span className="text-slate-500 dark:text-slate-400">
                                  {step.time}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Analysis Ready
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                  Generate content to see comprehensive governance analysis, AI
                  feedback, and performance metrics
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center justify-center text-slate-400">
                    <Shield className="w-4 h-4 mr-2" />
                    Real-time Compliance Checking
                  </div>
                  <div className="flex items-center justify-center text-slate-400">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI-Powered Insights
                  </div>
                  <div className="flex items-center justify-center text-slate-400">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Performance Analytics
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoApp;
