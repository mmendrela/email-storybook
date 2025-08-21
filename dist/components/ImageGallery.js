"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGallery = void 0;
const Section_1 = require("./Section");
const utils_1 = require("../utils");
class ImageGallery {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { images, layout = 'grid-2x2', rounded = true, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        const borderRadius = rounded ? '8px' : '0px';
        let galleryContent = '';
        switch (layout) {
            case 'grid-2x2': {
                const imageRows = [];
                for (let i = 0; i < images.length; i += 2) {
                    imageRows.push(images.slice(i, i + 2));
                }
                galleryContent = imageRows.map(row => {
                    const rowImages = row.map(image => `
            <mj-column width="50%">
              ${image.href ? `<mj-button href="${image.href}" background-color="transparent" padding="0">` : ''}
                <mj-image 
                  src="${image.src}"
                  alt="${image.alt}"
                  border-radius="${borderRadius}"
                  padding="5px"
                />
              ${image.href ? '</mj-button>' : ''}
            </mj-column>
          `).join('');
                    return new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '10px 20px',
                        ...styleProps,
                        children: rowImages
                    }).render();
                }).join('');
                break;
            }
            case 'horizontal': {
                const columnWidth = `${100 / Math.min(images.length, 4)}%`;
                const displayImages = images.slice(0, 4);
                galleryContent = new Section_1.Section({
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    ...styleProps,
                    children: displayImages.map(image => `
            <mj-column width="${columnWidth}">
              ${image.href ? `<mj-button href="${image.href}" background-color="transparent" padding="0">` : ''}
                <mj-image 
                  src="${image.src}"
                  alt="${image.alt}"
                  border-radius="${borderRadius}"
                  padding="5px"
                />
              ${image.href ? '</mj-button>' : ''}
            </mj-column>
          `).join('')
                }).render();
                break;
            }
            case 'vertical': {
                galleryContent = images.map(image => new Section_1.Section({
                    backgroundColor: '#ffffff',
                    padding: '10px 30px',
                    ...styleProps,
                    children: `
              <mj-column>
                ${image.href ? `<mj-button href="${image.href}" background-color="transparent" padding="0">` : ''}
                  <mj-image 
                    src="${image.src}"
                    alt="${image.alt}"
                    border-radius="${borderRadius}"
                  />
                ${image.href ? '</mj-button>' : ''}
              </mj-column>
            `
                }).render()).join('');
                break;
            }
            case 'three-columns': {
                const imageRows = [];
                for (let i = 0; i < images.length; i += 3) {
                    imageRows.push(images.slice(i, i + 3));
                }
                galleryContent = imageRows.map(row => {
                    const rowImages = row.map(image => `
            <mj-column width="33.33%">
              ${image.href ? `<mj-button href="${image.href}" background-color="transparent" padding="0">` : ''}
                <mj-image 
                  src="${image.src}"
                  alt="${image.alt}"
                  border-radius="${borderRadius}"
                  padding="5px"
                />
              ${image.href ? '</mj-button>' : ''}
            </mj-column>
          `).join('');
                    return new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '10px 20px',
                        ...styleProps,
                        children: rowImages
                    }).render();
                }).join('');
                break;
            }
        }
        return galleryContent;
    }
}
exports.ImageGallery = ImageGallery;
