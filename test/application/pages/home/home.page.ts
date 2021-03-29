import { TopLinks } from "../components/toplinks.component"


export class HomePage {
    topLinks: TopLinks = new TopLinks();

    openAllForCategory(categoryName: string) {
        $(`a=${categoryName}`).waitAndClick();

        const openedSeeAllLink = $('.dropdown.open .see-all');
        expect(openedSeeAllLink).toBeVisible();

        openedSeeAllLink.waitAndClick();
    }
}