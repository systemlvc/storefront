// blocks/info-box/decorate.js
export default function decorate(block) {
  const [titleEl, subtitleEl] = block.querySelectorAll(':scope > div > div');

  const wrapper = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = titleEl.textContent;

  const subtitle = document.createElement('h4');
  subtitle.innerHTML = subtitleEl.innerHTML;

  wrapper.append(title, subtitle);
  block.textContent = '';
  block.append(wrapper);
}

export function createInfoBox(title, subtitle, hotline) {
  const wrapper = document.createElement('div');
  wrapper.className = 'info-box';

  const h2 = document.createElement('h5');
  h2.textContent = title;
  h2.style.textAlign = 'center';
  const h4 = document.createElement('h6');
  h4.innerHTML = subtitle;
  const h42 = document.createElement('h6');
  h42.innerHTML = `Call: <strong>${hotline}</strong>`;
  h42.style.textAlign = 'center';
  wrapper.append(h2, h4, h42);
  return wrapper;
}
