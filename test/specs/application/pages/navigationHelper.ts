export class NavigationHelper {
    goToProductComparisonPage() {
        const comparisonAlertButton = $('.alert [href="http://93.126.97.71:10082/index.php?route=product/compare"]');
        comparisonAlertButton.click();
        const content = $('#product-compare');
        expect(content).toBeVisible();
    }
}