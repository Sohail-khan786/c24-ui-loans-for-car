import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const LoansForCarHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg mb-6">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Car Loans & Financing
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get the best car loan options with competitive rates and flexible
            terms. We help you finance your dream car affordably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-3xl mb-2">💳</div>
              <h3 className="font-bold text-gray-800">Easy Application</h3>
              <p className="text-sm text-gray-600 mt-2">
                Simple and fast loan application process
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-gray-800">Competitive Rates</h3>
              <p className="text-sm text-gray-600 mt-2">
                Best interest rates in the market
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-800">Quick Approval</h3>
              <p className="text-sm text-gray-600 mt-2">
                Fast approval and disbursement
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="primary" size="large" className="px-8">
              Apply Now
            </Button>
            <Link to="/loan/faq">
              <Button size="large" className="px-8">
                View FAQ
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoansForCarHome;
