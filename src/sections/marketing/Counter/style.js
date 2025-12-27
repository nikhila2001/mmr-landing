
import styled from "styled-components";
import { Row } from "react-bootstrap";

export const ComparisonWrapper = styled.div`
  padding: 60px 0;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const TableBox = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);

  .table-row {
    border-bottom: 1px solid #e5e7eb;
    padding: 18px ;
  }

  .header-row {
    background: linear-gradient(to right, #2b9fe8, #6cc4f0);
    color: #fff;
    font-weight: 600;
    padding: 22px 0;
    border-bottom: none;
  }

`;

export const HeaderCell = styled.div`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  position: relative;
  color: #fff;
  align-self:center;
`;

export const TableRow = styled(Row)`
  background: #ffffff;                     /* bg-white */
  transition: background-color 0.3s ease;  /* transition-colors */

  &:hover {
    background: rgba(239, 246, 255, 0.5);  /* bg-blue-50/50 */
    /* Tailwind blue-50 = #eff6ff, 50% opacity */
  }
`;

export const FeatureCell = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
`;

export const ValueCell = styled.div`
  font-size: 15px;
  color: #374151;
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Pill = styled.span`
  display: block;
  font-size: 12px;
  padding: 3px 10px;
  margin-top: 6px;
  border-radius: 12px;
  background: #dff2ff;
  color: #0284ff;
  font-weight: 600;
  width: fit-content;
`;

export const CheckIcon = styled.span`
  color: #10b981;
  font-size: 16px;
  font-weight: bold;
  &::before {
    content: "✓";
  }
`;

export const CrossIcon = styled.span`
  color: #ef4444;
  font-size: 16px;
  font-weight: bold;
  &::before {
    content: "✕";
  }
`;
