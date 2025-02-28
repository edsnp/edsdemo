import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js';

export default async function decorate(block) {
    // fetch placeholders from the 'locale' folder
    const locale = getMetadata('locale') ? getMetadata('locale') : 'en';
    const placeholders = await fetchPlaceholders(locale);
    const {aboutus} = placeholders;
    block.innerHTML = 'aboutUs: ' + aboutus;
}