import React from 'react';
import { Wine, ChevronDown, Download, ArrowRight, Camera, Sparkles, Shield, Smartphone } from 'lucide-react';
import { Link, Routes, Route } from 'react-router-dom';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 w-1/3">
            <img
            className="h-8 w-8"
            src="/public/assets/boozyLogo.png"
            alt="Boozy Logo"
          />
              <span className="text-xl font-bold text-gray-900">Boozy AI</span>
            </div>
            <div className="flex justify-center w-1/3">
              <a href="#features" className="text-gray-600 hover:text-gray-900 flex items-center">
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="flex justify-end w-1/3">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800">
                <Download className="mr-2 h-4 w-4" /> Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-sm text-gray-500">
              © 2025 IcarAI LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
              <a href="mailto:contact@boozyai.com" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <main>
        {/* Hero Section */}

<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Give text less space so the image can be bigger */}
      <div className="lg:w-2/5 text-left lg:pr-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Track Your Alcohol Intake<br />With Just a Photo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Using advanced AI technology to help you make informed decisions about your drinking habits.
          Simply snap a photo of your drink and get instant analysis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="h-14 w-48 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 cursor-pointer">
            App Store Download
          </div>
          <div className="h-14 w-48 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 cursor-pointer">
            Google Play Download
          </div>
        </div>
      </div>

      {/* Give image more space */}
      <div className="lg:w-3/5 mt-12 lg:mt-0">
        <img
          src="/public/assets/boozyloading.png"
          alt="Boozy loading illustration"
          className="rounded-2xl w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>



        {/* How It Works */}
        <section id="features" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">How It Works</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  When you take a picture with Boozy AI, many things happen. First, our AI model analyzes the image to identify the type of drink. Using advanced computer vision, we determine the volume and characteristics of your beverage. Finally, our multimodal AI model processes everything to calculate alcohol content, standard drinks, and provides personalized insights for tracking your consumption.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-900 p-8 rounded-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-xl">
                      <Camera className="h-8 w-8 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Take a Photo</h3>
                      <p className="text-gray-300">Snap a picture of your drink using our app</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl">
                      <Sparkles className="h-8 w-8 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                      <p className="text-gray-300">Our AI instantly analyzes the drink type and volume</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl">
                      <Shield className="h-8 w-8 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Get Results</h3>
                      <p className="text-gray-300">Receive detailed information about alcohol content</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl">
                      <Smartphone className="h-8 w-8 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
                      <p className="text-gray-300">Monitor your consumption patterns over time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">How Accurate Is It?</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                Our AI model has been trained on thousands of drink images and validated by experts. Through rigorous testing and continuous improvement, we’ve achieved exceptional accuracy in both identifying drinks and estimating their volumes. While brand-specific recognition in a glass can be trickier, timely and consistent input of drink data ensures our BAC calculator remains highly accurate—especially when it comes to volume and ABV.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-900 p-8 rounded-2xl">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-gray-800 p-6 rounded-xl">
                      <div className="text-4xl font-bold mb-2">Very Accurate</div>
                      <p className="text-gray-300">Drinks in their original cans or bottles</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xln">
                      <div className="text-4xl font-bold mb-2">Fairly Accurate</div>
                      <p className="text-gray-300">Drinks in glass; beer, wine, shots, cocktails</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl">
                      <div className="text-4xl font-bold mb-2">Very Accurate</div>
                      <p className="text-gray-300">Blood Alcohol Content Estimation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       



      </main>
    </Layout>
  );
}

function PrivacyPolicy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p>Last updated: January 2025</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including photos of beverages, usage data, and account information.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information to provide and improve our services, develop new features, and protect our users.</p>
          <h2>3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
        </div>
      </div>
    </Layout>
  );
}

function TermsConditions() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-lg">
          <p>Last updated: January 2025</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Boozy AI, you agree to be bound by these terms and conditions.</p>
          <h2>2. Use License</h2>
          <p>We grant you a limited, non-exclusive license to use our application for personal use.</p>
          <h2>3. Disclaimer</h2>
          <p>The application's results are estimates and should not be used as medical advice.</p>
        </div>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
    </Routes>
  );
}

export default App;