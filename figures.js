// Care funding figures — review every April. Last reviewed: June 2026 (2026/27 rates).
// To update: change values here and rebuild any static HTML snippets marked <!-- FIGURE: keep in sync with figures.js -->
const CARE_FIGURES = {
  reviewYear: "2026/27",
  lastReviewed: "June 2026",
  attendanceAllowanceLower: "£76.70",
  attendanceAllowanceHigher: "£114.60",
  carersAllowance: "£86.45",
  personalExpensesAllowance: "£34.10",
  upperCapitalLimit: "£23,250",
  lowerCapitalLimit: "£14,250",
  upperCapitalLimitNum: 23250,
  lowerCapitalLimitNum: 14250,
  tariffStep: "£1 per £250",
  nursingCarePayment: "£100",
  englandNursingComparator: "£254",
  // Weekly fee ranges for the longevity estimator — verified June 2026 against carehome.co.uk NI data
  // NI averages (Jun 2026): residential ~£1,160/wk, nursing ~£1,410/wk; ranges reflect market spread
  homeCareWeeklyFeeMin: 300,
  homeCareWeeklyFeeMax: 1000,
  residentialWeeklyFeeMin: 800,
  residentialWeeklyFeeMax: 1500,
  nursingWeeklyFeeMin: 900,
  nursingWeeklyFeeMax: 1800
};
