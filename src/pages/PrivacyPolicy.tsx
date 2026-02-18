import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1E30] mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <p className="text-sm text-gray-500">
            Last updated: January 25, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">1. Introduction</h2>
            <p>
              Lunzo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us and information collected automatically:</p>
            
            <h3 className="text-xl font-semibold text-[#1C1E30] mb-3 mt-4">Information You Provide:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (name, email address, password)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Images and content you upload to our Service</li>
              <li>Communications with us (support requests, feedback)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1C1E30] mb-3 mt-4">Automatically Collected Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (features used, processing times, templates selected)</li>
              <li>Log data (IP address, access times, pages viewed)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process your transactions and manage your subscription</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              <li>Personalize your experience and provide content recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">4. How We Share Your Information</h2>
            <p className="mb-4">We do not sell your personal information.</p>
            <p className="mb-4">We only share your information in the limited circumstances described below:</p>

            <p className="mb-2"><strong>Service Providers:</strong></p>
            <p className="mb-2">We use trusted third-party service providers to operate and improve Lunzo. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Analytics Providers:</strong> We share limited technical and usage data (such as device information, app interactions, and performance metrics) with analytics services to help us understand how users interact with the app and improve functionality.</li>
              <li><strong>Cloud Storage Providers:</strong> User-uploaded images are securely stored on our cloud infrastructure for processing and delivery.</li>
              <li><strong>AI Image Processing Providers:</strong>When a car photo is processed, it is shared with a trusted third-party AI service to generate the final enhanced result. The service uses the image only to provide this functionality.</li>
            </ul>
            <p className="mb-4">All service providers are contractually obligated to protect your data and use it only to provide services on our behalf.</p>

            <p className="mb-2"><strong>Legal Requirements:</strong></p>
            <p className="mb-4">We may disclose information if required to do so by law or in response to valid legal requests, or to protect our rights, property, or safety.</p>

            <p className="mb-2"><strong>Business Transfers:</strong></p>
            <p className="mb-4">If Lunzo is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</p>

            <p className="mb-2"><strong>With Your Consent:</strong></p>
            <p className="mb-4">We may share your information when you explicitly authorize us to do so.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">5. Data Storage and Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">6. Your Image Data</h2>
            <p>
              Images you upload to Lunzo are processed to provide our Service. We temporarily store your images to complete processing and may retain them for a limited period to improve our Service quality. You can delete your images at any time through the app. We do not use your images for training AI models without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">8. Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at <a href="mailto:thelunzoapp@gmail.com" className="text-[#00C9B7] hover:underline">thelunzoapp@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">9. Account Deletion</h2>
            <p>
              You may request deletion of your account at any time by contacting us at <a href="mailto:thelunzoapp@gmail.com" className="text-[#00C9B7] hover:underline">thelunzoapp@gmail.com</a>. Upon account deletion, we will permanently delete your personal information and uploaded content from our systems within 30 days, except where we are required to retain certain information for legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">10. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Service, you consent to the transfer of your information to these countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:thelunzoapp@gmail.com" className="text-[#00C9B7] hover:underline">thelunzoapp@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
