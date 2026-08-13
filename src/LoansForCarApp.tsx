import { Routes, Route, Navigate } from "react-router-dom";
import LoansForCarHome from "./pages/LoansForCarHome";
import LoansForCarFAQ from "./pages/LoansForCarFAQ";

const LoansForCarApp = () => {
  return (
    <Routes>
      <Route index element={<LoansForCarHome />} />
      <Route path="faq" element={<LoansForCarFAQ />} />
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
};

export default LoansForCarApp;
