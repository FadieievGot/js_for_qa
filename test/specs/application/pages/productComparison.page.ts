export class ProductComparisonPage {
    private get root(): WebdriverIO.Element {
        return $('#product-compare');
    }

    isNotEmpty() {
        const content = this.root.$$('#content');
        expect (content).not.toHaveText('You have not chosen any products to compare.');
    }

    haveElement(text) {
        const comparList = this.root.$(' a strong');
        expect(comparList).toHaveText(text);
    }
}