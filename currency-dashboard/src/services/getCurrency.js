export async function getCurrencyValues() {
  // params -> destCurrency, fromDate, toDate
  let request =
    "http://localhost:8080/fx-rates?destCurrencyCode=CZK&fromDate=2014-01-19T00:00:00.000+0000&toDate=2013-12-20T00:00:00.000+0000";
  try {
    const response = await fetch(request);
    return await response.json();
  } catch (error) {
    return [];
  }
}
