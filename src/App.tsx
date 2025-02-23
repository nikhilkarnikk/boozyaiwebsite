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
            src="/assets/boozyLogo.png"
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
            {/* Use flex-col-reverse on mobile to show image first, then switch to row on lg screens */}
            <div className="flex flex-col-reverse lg:flex-row items-center">
              <div className="lg:w-2/5 text-center lg:text-left mt-12 lg:mt-0 lg:pr-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Track Your Alcohol Intake<br />With Just a Photo
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Using advanced AI technology to help you make informed decisions about your drinking habits.
                  Simply snap a photo of your drink and get instant analysis.
                </p>
                <div className="flex flex-row justify-center lg:justify-start gap-4">
                  <a 
                    href="https://apps.apple.com/us/app/boozy-ai/id6739364754"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-48 h-14"
                  >
                    <img 
                      src="/assets/appstoredownload.png" 
                      alt="Download on App Store"
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <a 
                    href="#" 
                    className="w-48 h-14"
                  >
                    <img 
                      src="/assets/googleplaybutton.png" 
                      alt="Get it on Google Play"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>
              
              <div className="lg:w-3/5">
                <img
                  src="/assets/boozyloading.png"
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
          <p className="text-gray-600">Last updated: January 31, 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Boozy AI ("we," "our," or "us"). We are committed to protecting your privacy 
            and ensuring you have a positive experience when using our drink tracking and analysis application.
            This policy outlines our practices for collecting, using, and safeguarding your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 mb-4">
          <li>Basic account information (email and username)</li>
            <li>Optional user details (weight and gender) for BAC calculation accuracy</li>
            <li>Drink entries and timestamps</li>
            <li>Social sharing preferences</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mb-4">
          <li>Basic device information required for app functionality</li>
          <li>Time stamps of drink entries</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Analyze beverage photos and calculate BAC and caloric content</li>
            <li>Provide personalized drink tracking and recommendations</li>
            <li>Enable social sharing features with your connections</li>
            <li>Improve our services and develop new features</li>
            <li>Ensure the security and proper functioning of our app</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
          <p>We share your information only in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>With other users when you explicitly choose to share your drink data</li>
            <li>With service providers who assist in our operations</li>
            <li>When required by law or to protect rights and safety</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your 
            personal information from unauthorized access, disclosure, or destruction. However, no 
            internet transmission is completely secure, and we cannot guarantee the security of 
            information transmitted through our app.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access and download your personal data</li>
            <li>Correct or update your information</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of promotional communications</li>
            <li>Control social sharing settings</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
          <p>
            Our app is not intended for users under the age of 21. We do not knowingly collect 
            personal information from individuals under 21 years of age.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Subscription Information</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-medium mb-4">Subscription Options</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">Monthly Subscription</h4>
                <p>$1.99 per month</p>
                <p className="text-sm text-gray-600">Auto-renews monthly until canceled</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">Annual Subscription</h4>
                <p>$9.99 per year</p>
                <p className="text-sm text-gray-600">Auto-renews yearly until canceled</p>
              </div>
            </div>
          </div>
          <p>
            Payment will be charged to your Apple ID account at confirmation of purchase. 
            Subscription automatically renews unless it is canceled at least 24 hours before 
            the end of the current period. Your account will be charged for renewal within 
            24 hours prior to the end of the current period at the cost of the chosen 
            subscription plan. You can manage and cancel your subscriptions by going to your 
            account settings on the App Store after purchase.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our practices, please contact us at:
            <br />
            Email: boozyaiapp@gmail.com
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              By using Boozy AI, you agree to the collection and use of information in accordance 
              with this Privacy Policy.
            </p>
          </div>
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