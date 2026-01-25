import { Footer } from '../components/Footer';

export function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1E30] mb-8">
          Terms & Conditions
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <p className="text-sm text-gray-500">
            Last updated: January 25, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Lunzo ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use Lunzo for personal and commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose without explicit written permission</li>
              <li>Attempt to decompile or reverse engineer any software contained in the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">3. Subscription Terms</h2>
            <p className="mb-4">
              Lunzo offers subscription-based services with the following terms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Billing Cycle:</strong> Subscriptions are billed on a monthly or annual basis, depending on your selected plan.</li>
              <li><strong>Auto-Renewal:</strong> Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.</li>
              <li><strong>Price Changes:</strong> We reserve the right to modify subscription prices. You will be notified of any price changes at least 30 days in advance.</li>
              <li><strong>Access:</strong> Subscription grants you access to premium features, templates, and processing capabilities as outlined in your selected plan.</li>
              <li><strong>Multiple Devices:</strong> Your subscription may be used across multiple devices associated with your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">4. Refund and Cancellation Policy</h2>
            <p className="mb-4">
              We want you to be satisfied with your subscription. Here's our refund and cancellation policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your account settings or by contacting us at thelunzoapp@gmail.com. Cancellation will take effect at the end of your current billing period.</li>
              <li><strong>Refunds:</strong> We offer a 14-day money-back guarantee for new subscriptions. If you're not satisfied within the first 14 days of your initial subscription, contact us for a full refund.</li>
              <li><strong>No Partial Refunds:</strong> After the 14-day period, we do not provide partial refunds for unused portions of your subscription period.</li>
              <li><strong>Refund Processing:</strong> Refunds, if approved, will be processed to the original payment method within 5-10 business days.</li>
              <li><strong>Chargebacks:</strong> If you dispute a charge through your payment provider, your account may be suspended pending resolution.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">5. User Content</h2>
            <p>
              You retain all rights to any images or content you upload to Lunzo. By using our Service, you grant us a license to process your content solely for the purpose of providing the Service. We do not claim ownership of your content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">6. Account Deletion</h2>
            <p>
              If you wish to delete your account, please contact us at <a href="mailto:thelunzoapp@gmail.com" className="text-[#00C9B7] hover:underline">thelunzoapp@gmail.com</a>. Upon account deletion, all your data, including processed images and account information, will be permanently removed from our systems within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">7. Prohibited Uses</h2>
            <p className="mb-4">You may not use our Service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">8. Service Availability</h2>
            <p>
              We strive to maintain high availability of our Service, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">9. Limitation of Liability</h2>
            <p>
              In no event shall Lunzo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to revise these terms at any time. By continuing to use the Service after changes are posted, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1C1E30] mb-4">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:thelunzoapp@gmail.com" className="text-[#00C9B7] hover:underline">thelunzoapp@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
