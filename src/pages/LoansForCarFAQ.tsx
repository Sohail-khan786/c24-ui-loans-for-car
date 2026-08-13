import { Card, Collapse, Button } from "antd";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const LoansForCarFAQ = () => {
  const items = [
    {
      key: "1",
      label: "What is the eligibility criteria for car loans?",
      children: (
        <p className="text-gray-700">
          You must be at least 21 years old, have a valid income, and a good
          credit score. We consider various factors to determine your
          eligibility.
        </p>
      ),
    },
    {
      key: "2",
      label: "What documents do I need to apply?",
      children: (
        <p className="text-gray-700">
          You'll need ID proof, income documents (salary slip/ITR), bank
          statements, and proof of address. We'll provide a complete checklist
          during application.
        </p>
      ),
    },
    {
      key: "3",
      label: "How long does approval take?",
      children: (
        <p className="text-gray-700">
          Our quick approval process typically completes within 24-48 hours. In
          some cases, we can provide instant approval on your application.
        </p>
      ),
    },
    {
      key: "4",
      label: "What is the loan tenure?",
      children: (
        <p className="text-gray-700">
          We offer flexible loan tenure from 1 to 7 years. You can choose the
          tenure that best fits your financial situation.
        </p>
      ),
    },
    {
      key: "5",
      label: "Are there any hidden charges?",
      children: (
        <p className="text-gray-700">
          No hidden charges. We provide a transparent breakdown of all costs
          including interest, processing fees, and insurance. What you see is
          what you pay.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/loan">
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            size="large"
            className="mb-6"
          >
            Back to Home
          </Button>
        </Link>

        <Card className="shadow-lg">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mb-6">
            Find answers to common questions about our car loan services
          </p>

          <Collapse items={items} accordion />

          <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-bold text-gray-800 mb-2">
              Have more questions?
            </h3>
            <p className="text-gray-700 mb-4">
              Our loan specialists are ready to help you find the best option
            </p>
            <Button type="primary">Talk to Specialist</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoansForCarFAQ;
