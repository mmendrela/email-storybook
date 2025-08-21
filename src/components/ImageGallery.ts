import { ImageGalleryProps } from '../types';
import { Section } from './Section';
import { formatAttributes, formatStyleProps } from '../utils';

export class ImageGallery {
  constructor(public props: ImageGalleryProps) {}

  render(): string {
    const { 
      images,
      layout = 'grid-2x2',
      rounded = true,
      ...styleProps 
    } = this.props;
    
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);
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
          
          return new Section({
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
        
        galleryContent = new Section({
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
        galleryContent = images.map(image => 
          new Section({
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
          }).render()
        ).join('');
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
          
          return new Section({
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