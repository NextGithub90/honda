const products = [
  {
    id: 'ayla',
    name: 'All New Ayla',
    variant: '1.2 R ADS',
    image: './img/all-new-ayla.webp',
    alt: 'Daihatsu All New Ayla warna merah',
    category: 'hatchback',
    categoryLabel: 'Hatchback',
    transmissions: ['manual', 'cvt'],
    transmissionLabel: 'M/T & CVT',
    engine: '1.200 cc',
    price: 138.5,
    tag: 'Favorit',
    tagClass: 'popular',
    featured: 2,
  },
  {
    id: 'sigra',
    name: 'New Sigra',
    variant: '1.2 R Deluxe',
    image: './img/sigra.webp',
    alt: 'Daihatsu New Sigra warna silver',
    category: 'mpv',
    categoryLabel: 'MPV',
    transmissions: ['manual', 'automatic'],
    transmissionLabel: 'M/T & A/T',
    engine: '1.200 cc',
    price: 141.5,
    tag: 'Terlaris',
    tagClass: '',
    featured: 1,
  },
  {
    id: 'xenia',
    name: 'All New Xenia',
    variant: '1.3 R ADS',
    image: './img/all-new-xenia.webp',
    alt: 'Daihatsu All New Xenia warna silver',
    category: 'mpv',
    categoryLabel: 'MPV',
    transmissions: ['manual', 'cvt'],
    transmissionLabel: 'M/T & CVT',
    engine: '1.300 cc',
    price: 226.55,
    tag: 'Keluarga',
    tagClass: 'popular',
    featured: 3,
  },
  {
    id: 'terios',
    name: 'New Terios',
    variant: 'R Custom',
    image: './img/new-terios.webp',
    alt: 'Daihatsu New Terios warna silver',
    category: 'suv',
    categoryLabel: 'SUV',
    transmissions: ['manual', 'automatic'],
    transmissionLabel: 'M/T & A/T',
    engine: '1.500 cc',
    price: 245.05,
    tag: 'Promo',
    tagClass: 'promo',
    featured: 4,
  },
  {
    id: 'rocky',
    name: 'New Rocky',
    variant: '1.2 X ADS',
    image: './img/new-rocky.webp',
    alt: 'Daihatsu New Rocky warna putih',
    category: 'suv',
    categoryLabel: 'SUV',
    transmissions: ['manual', 'cvt'],
    transmissionLabel: 'M/T & CVT',
    engine: '1.200 cc',
    price: 228.55,
    tag: 'Populer',
    tagClass: 'popular',
    featured: 5,
  },
  {
    id: 'rocky-hybrid',
    name: 'Rocky Hybrid',
    variant: 'Premium G HEV',
    image: './img/rocky-hybrid.webp',
    alt: 'Daihatsu Rocky Hybrid',
    category: 'suv',
    categoryLabel: 'SUV Hybrid',
    transmissions: ['cvt'],
    transmissionLabel: 'e-Smart Hybrid',
    engine: '1.200 cc',
    price: 299.85,
    tag: 'Hybrid',
    tagClass: 'promo',
    featured: 6,
  },
  {
    id: 'sirion',
    name: 'All New Sirion',
    variant: '1.3 R CVT',
    image: './img/all-new-sirion.webp',
    alt: 'Daihatsu All New Sirion',
    category: 'hatchback',
    categoryLabel: 'Hatchback',
    transmissions: ['cvt'],
    transmissionLabel: 'CVT',
    engine: '1.300 cc',
    price: 233.95,
    tag: 'Stylish',
    tagClass: 'popular',
    featured: 7,
  },
  {
    id: 'granmax-pickup',
    name: 'Gran Max Pick Up',
    variant: '1.5 AC PS',
    image: './img/granmax-pickup.webp',
    alt: 'Daihatsu Gran Max Pick Up',
    category: 'commercial',
    categoryLabel: 'Pick Up',
    transmissions: ['manual'],
    transmissionLabel: 'Manual',
    engine: '1.500 cc',
    price: 161.45,
    tag: 'Bisnis',
    tagClass: '',
    featured: 8,
  },
  {
    id: 'granmax-minibus',
    name: 'Gran Max Mini Bus',
    variant: '1.5 D PS',
    image: './img/granmax-minibus.webp',
    alt: 'Daihatsu Gran Max Mini Bus',
    category: 'mpv',
    categoryLabel: 'Mini Bus',
    transmissions: ['manual'],
    transmissionLabel: 'Manual',
    engine: '1.500 cc',
    price: 194.25,
    tag: 'Usaha',
    tagClass: '',
    featured: 9,
  },
  {
    id: 'luxio',
    name: 'New Luxio',
    variant: '1.5 X M/T',
    image: './img/new-luxio.webp',
    alt: 'Daihatsu New Luxio',
    category: 'mpv',
    categoryLabel: 'MPV',
    transmissions: ['manual', 'automatic'],
    transmissionLabel: 'M/T & A/T',
    engine: '1.500 cc',
    price: 241.25,
    tag: 'Lapang',
    tagClass: 'popular',
    featured: 10,
  },
  {
    id: 'blindvan',
    name: 'Gran Max Blind Van',
    variant: '1.5 AC PS',
    image: './img/granmax-blindvan.webp',
    alt: 'Daihatsu Gran Max Blind Van',
    category: 'commercial',
    categoryLabel: 'Blind Van',
    transmissions: ['manual'],
    transmissionLabel: 'Manual',
    engine: '1.500 cc',
    price: 181.65,
    tag: 'Niaga',
    tagClass: '',
    featured: 11,
  },
];

const handoverModels = [
  'New Sigra', 'All New Xenia', 'New Terios', 'All New Ayla', 'Gran Max',
  'New Rocky', 'New Sigra', 'All New Xenia', 'Gran Max', 'New Terios',
  'All New Ayla', 'New Sigra', 'New Rocky', 'Gran Max', 'All New Xenia',
  'New Sigra', 'New Terios', 'All New Ayla', 'Gran Max', 'New Rocky',
];

const state = {
  search: '',
  category: '',
  maxPrice: 320,
  sort: 'featured',
  page: 1,
  pageSize: 12,
};

const productGrid = document.querySelector('#product-grid');
const resultCount = document.querySelector('#result-count');
const pagination = document.querySelector('#pagination');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#car-search');
const sortSelect = document.querySelector('#car-sort');
const categoryFilter = document.querySelector('#category-filter');
const priceFilter = document.querySelector('#price-filter');

function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value * 1_000_000);
}

function getFilteredProducts() {
  const query = state.search.trim().toLocaleLowerCase('id-ID');
  const filtered = products.filter((product) => {
    const matchesSearch = !query || [product.name, product.variant, product.categoryLabel]
      .some((value) => value.toLocaleLowerCase('id-ID').includes(query));
    const matchesCategory = !state.category || product.category === state.category;
    return matchesSearch && matchesCategory && product.price <= state.maxPrice;
  });

  return filtered.sort((a, b) => {
    if (state.sort === 'price-asc') return a.price - b.price;
    if (state.sort === 'price-desc') return b.price - a.price;
    if (state.sort === 'name') return a.name.localeCompare(b.name, 'id');
    return a.featured - b.featured;
  });
}

function productCardTemplate(product) {
  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" decoding="async" />
      </div>
      <div class="product-content">
        <div class="product-title-row">
          <h3>${product.name}</h3>
          <span>${product.categoryLabel}</span>
        </div>
        <p class="product-variant">${product.variant}</p>
        <div class="product-specs">
          <span><i class="spec-dot"></i>${product.categoryLabel}</span>
          <span><i class="spec-dot"></i>${product.transmissionLabel}</span>
          <span><i class="spec-dot"></i>${product.engine}</span>
        </div>
        <div class="product-price">
          <p>Harga mulai<strong>${formatPrice(product.price)}</strong></p>
          <button type="button" data-open-lead data-car="${product.name}" aria-label="Konsultasi ${product.name}">Konsultasi <svg><use href="#icon-arrow" /></svg></button>
        </div>
      </div>
    </article>`;
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / state.pageSize);
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `<button type="button" class="${page === state.page ? 'active' : ''}" data-page="${page}" aria-label="Halaman ${page}" ${page === state.page ? 'aria-current="page"' : ''}>${page}</button>`;
  }).join('');

  pagination.innerHTML = `
    <button type="button" class="prev-page" data-page="${state.page - 1}" aria-label="Halaman sebelumnya" ${state.page === 1 ? 'disabled' : ''}><svg><use href="#icon-chevron" /></svg></button>
    ${pageButtons}
    <button type="button" data-page="${state.page + 1}" aria-label="Halaman berikutnya" ${state.page === totalPages ? 'disabled' : ''}><svg><use href="#icon-chevron" /></svg></button>`;
}

function renderProducts({ scrollToGrid = false } = {}) {
  const filtered = getFilteredProducts();
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const pageStart = (state.page - 1) * state.pageSize;
  const pageItems = filtered.slice(pageStart, pageStart + state.pageSize);

  productGrid.innerHTML = pageItems.map(productCardTemplate).join('');
  resultCount.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;
  productGrid.hidden = filtered.length === 0;
  renderPagination(filtered.length);

  if (scrollToGrid) {
    productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function syncFilters() {
  state.category = categoryFilter.value;
  state.maxPrice = Number(priceFilter.value);
  state.page = 1;
  renderProducts();
}

function resetFilters() {
  searchInput.value = '';
  sortSelect.value = 'featured';
  categoryFilter.value = '';
  priceFilter.value = '320';
  Object.assign(state, {
    search: '',
    category: '',
    maxPrice: 320,
    sort: 'featured',
    page: 1,
  });
  renderProducts();
}

let searchTimer;
searchInput.addEventListener('input', () => {
  window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(() => {
    state.search = searchInput.value;
    state.page = 1;
    renderProducts();
  }, 120);
});

sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  state.page = 1;
  renderProducts();
});

categoryFilter.addEventListener('change', syncFilters);
priceFilter.addEventListener('change', syncFilters);

document.querySelector('#reset-filter').addEventListener('click', resetFilters);
document.querySelector('#empty-reset').addEventListener('click', resetFilters);

pagination.addEventListener('click', (event) => {
  const button = event.target.closest('[data-page]');
  if (!button || button.disabled) return;
  state.page = Number(button.dataset.page);
  renderProducts({ scrollToGrid: true });
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
    searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

function renderHandoverGallery() {
  const track = document.querySelector('#handover-track');
  track.innerHTML = handoverModels.map((model, index) => {
    const number = String(index + 1).padStart(2, '0');
    return `
      <figure class="handover-card">
        <div class="image-wrap"><img src="./serah_terima/serah-terima-${number}.webp" alt="Serah terima ${model} kepada pelanggan" loading="lazy" decoding="async" /></div>
      </figure>`;
  }).join('');
}

function setupSlider(track) {
  const buttons = document.querySelectorAll(`[data-slider="${track.id}"]`);
  const dotsContainer = document.querySelector(`[data-dots-for="${track.id}"]`);
  const items = [...track.children];
  const dotCount = Math.min(track.id === 'handover-track' ? 6 : items.length, items.length);

  if (dotsContainer) {
    dotsContainer.innerHTML = Array.from({ length: dotCount }, (_, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-slide-dot="${index}" tabindex="-1"></button>`).join('');
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = Number(button.dataset.direction);
      track.scrollBy({ left: track.clientWidth * 0.82 * direction, behavior: 'smooth' });
    });
  });

  dotsContainer?.addEventListener('click', (event) => {
    const dot = event.target.closest('[data-slide-dot]');
    if (!dot) return;
    const progress = Number(dot.dataset.slideDot) / Math.max(1, dotCount - 1);
    track.scrollTo({ left: (track.scrollWidth - track.clientWidth) * progress, behavior: 'smooth' });
  });

  let scrollTimer;
  track.addEventListener('scroll', () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      const activeIndex = Math.round(progress * Math.max(0, dotCount - 1));
      dotsContainer?.querySelectorAll('button').forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    }, 40);
  }, { passive: true });
}

const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

function closeMenu() {
  mainNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  menuButton.innerHTML = '<svg><use href="#icon-menu" /></svg>';
}

menuButton.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.innerHTML = `<svg><use href="#icon-${isOpen ? 'close' : 'menu'}" /></svg>`;
});

mainNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) closeMenu();
});


const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-sticky', window.scrollY > 120);
}, { passive: true });

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    mainNav.querySelectorAll('a').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -58% 0px', threshold: 0 });

document.querySelectorAll('main section[id], header[id]').forEach((section) => navObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const leadDialog = document.querySelector('#lead-dialog');
const leadCar = document.querySelector('#lead-car');
const leadForm = document.querySelector('#lead-form');

leadCar.insertAdjacentHTML('beforeend', products.map((product) => `<option value="${product.name}">${product.name}</option>`).join(''));

function openLeadDialog(carName = '') {
  if (carName) leadCar.value = carName;
  if (!leadDialog.open) leadDialog.showModal();
  document.body.classList.add('dialog-open');
  window.setTimeout(() => document.querySelector('#lead-name').focus(), 150);
}

function closeLeadDialog() {
  document.body.classList.remove('dialog-open');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-open-lead]');
  if (trigger) openLeadDialog(trigger.dataset.car ?? '');
});

leadDialog.addEventListener('close', closeLeadDialog);
leadDialog.addEventListener('click', (event) => {
  if (event.target === leadDialog) leadDialog.close();
});

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#lead-name').value.trim();
  const city = document.querySelector('#lead-city').value.trim();
  const car = leadCar.value;
  const extraMessage = document.querySelector('#lead-message').value.trim();
  const message = [
    'Halo Kak Nanda, saya ingin konsultasi mobil Daihatsu.',
    '',
    `Nama: ${name}`,
    `Domisili: ${city}`,
    `Mobil diminati: ${car}`,
    extraMessage ? `Kebutuhan: ${extraMessage}` : '',
    '',
    'Mohon dibantu informasi promo dan simulasinya. Terima kasih.',
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/6285880015010?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  leadDialog.close();
});

// ==========================================
// SOSMED DIALOG (WHATSAPP & TIKTOK POP-UP)
// ==========================================
const sosmedDialog = document.querySelector('#sosmed-dialog');
const openLeadFromSosmedBtn = document.querySelector('#open-lead-from-sosmed');

function openSosmedDialog() {
  if (sosmedDialog && !sosmedDialog.open) {
    sosmedDialog.showModal();
    document.body.classList.add('dialog-open');
  }
}

function closeSosmedDialog() {
  if (sosmedDialog && sosmedDialog.open) {
    sosmedDialog.close();
  }
  document.body.classList.remove('dialog-open');
}

sosmedDialog?.addEventListener('close', closeSosmedDialog);
sosmedDialog?.addEventListener('click', (event) => {
  if (event.target === sosmedDialog) closeSosmedDialog();
});

openLeadFromSosmedBtn?.addEventListener('click', () => {
  closeSosmedDialog();
  openLeadDialog();
});

document.addEventListener('click', (event) => {
  const sosmedTrigger = event.target.closest('[data-open-sosmed]');
  if (sosmedTrigger) {
    event.preventDefault();
    openSosmedDialog();
  }
});

// ==========================================
// INTERACTIVE IMAGE LIGHTBOX WITH ZOOM & NAVIGATION
// ==========================================
const lightbox = document.querySelector('#image-lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const lightboxOverlay = document.querySelector('#lightbox-overlay');
const lightboxTitle = document.querySelector('#lightbox-title');
const lightboxCounter = document.querySelector('#lightbox-counter');
const lightboxZoomBadge = document.querySelector('#lightbox-zoom-badge');
const lightboxZoomInBtn = document.querySelector('#lightbox-zoom-in');
const lightboxZoomOutBtn = document.querySelector('#lightbox-zoom-out');
const lightboxZoomResetBtn = document.querySelector('#lightbox-zoom-reset');
const lightboxCloseBtn = document.querySelector('#lightbox-close');
const lightboxPrevBtn = document.querySelector('#lightbox-prev');
const lightboxNextBtn = document.querySelector('#lightbox-next');
const lightboxViewport = document.querySelector('#lightbox-viewport');

let lightboxGallery = [];
let lightboxCurrentIndex = 0;
let zoomScale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;

function updateTransform() {
  if (!lightboxImg) return;
  lightboxImg.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
  if (lightboxZoomBadge) {
    lightboxZoomBadge.textContent = `${Math.round(zoomScale * 100)}%`;
  }
  if (lightboxViewport) {
    if (zoomScale > 1.05) {
      lightboxViewport.classList.add('is-zoomed');
    } else {
      lightboxViewport.classList.remove('is-zoomed', 'is-dragging');
      panX = 0;
      panY = 0;
      lightboxImg.style.transform = `scale(${zoomScale})`;
    }
  }
}

function setZoom(newScale) {
  zoomScale = Math.min(Math.max(newScale, 0.6), 3.5);
  if (zoomScale <= 1.05) {
    panX = 0;
    panY = 0;
  }
  updateTransform();
}

function resetZoom() {
  zoomScale = 1;
  panX = 0;
  panY = 0;
  updateTransform();
}

function showLightboxItem(index) {
  if (!lightboxGallery.length) return;
  lightboxCurrentIndex = (index + lightboxGallery.length) % lightboxGallery.length;
  const item = lightboxGallery[lightboxCurrentIndex];

  resetZoom();
  lightboxImg.src = item.src;
  lightboxImg.alt = item.title || 'Foto';
  lightboxTitle.textContent = item.title || 'Foto Detail';
  lightboxCounter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxGallery.length}`;

  if (lightboxGallery.length <= 1) {
    lightboxPrevBtn.hidden = true;
    lightboxNextBtn.hidden = true;
  } else {
    lightboxPrevBtn.hidden = false;
    lightboxNextBtn.hidden = false;
  }
}

function openLightbox(gallery, startIndex = 0) {
  if (!gallery || !gallery.length) return;
  lightboxGallery = gallery;
  showLightboxItem(startIndex);
  lightbox.hidden = false;
  document.body.classList.add('dialog-open');
}

function closeLightbox() {
  if (lightbox) lightbox.hidden = true;
  document.body.classList.remove('dialog-open');
  resetZoom();
}

// Lightbox Toolbar Listeners
lightboxZoomInBtn?.addEventListener('click', () => setZoom(zoomScale + 0.3));
lightboxZoomOutBtn?.addEventListener('click', () => setZoom(zoomScale - 0.3));
lightboxZoomResetBtn?.addEventListener('click', resetZoom);
lightboxCloseBtn?.addEventListener('click', closeLightbox);
lightboxOverlay?.addEventListener('click', closeLightbox);

lightboxPrevBtn?.addEventListener('click', () => showLightboxItem(lightboxCurrentIndex - 1));
lightboxNextBtn?.addEventListener('click', () => showLightboxItem(lightboxCurrentIndex + 1));

// Mouse wheel zoom
lightboxViewport?.addEventListener('wheel', (event) => {
  event.preventDefault();
  const delta = event.deltaY < 0 ? 0.2 : -0.2;
  setZoom(zoomScale + delta);
}, { passive: false });

// Double click to toggle zoom
lightboxImg?.addEventListener('dblclick', (event) => {
  event.preventDefault();
  if (zoomScale > 1.2) {
    resetZoom();
  } else {
    setZoom(2.2);
  }
});

// Drag to pan when zoomed
lightboxViewport?.addEventListener('mousedown', (event) => {
  if (zoomScale <= 1.05) return;
  isDragging = true;
  startX = event.clientX - panX;
  startY = event.clientY - panY;
  lightboxViewport.classList.add('is-dragging');
});

window.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  panX = event.clientX - startX;
  panY = event.clientY - startY;
  updateTransform();
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    lightboxViewport?.classList.remove('is-dragging');
  }
});

// Touch support for mobile
let touchStartX = 0;
let touchStartY = 0;
lightboxViewport?.addEventListener('touchstart', (event) => {
  if (event.touches.length === 1) {
    touchStartX = event.touches[0].clientX - panX;
    touchStartY = event.touches[0].clientY - panY;
    if (zoomScale > 1.05) isDragging = true;
  }
}, { passive: true });

lightboxViewport?.addEventListener('touchmove', (event) => {
  if (isDragging && event.touches.length === 1 && zoomScale > 1.05) {
    panX = event.touches[0].clientX - touchStartX;
    panY = event.touches[0].clientY - touchStartY;
    updateTransform();
  }
}, { passive: true });

lightboxViewport?.addEventListener('touchend', (event) => {
  if (isDragging) {
    isDragging = false;
  } else if (zoomScale <= 1.05 && event.changedTouches.length === 1) {
    const diffX = event.changedTouches[0].clientX - (touchStartX + panX);
    if (diffX > 50) {
      showLightboxItem(lightboxCurrentIndex - 1);
    } else if (diffX < -50) {
      showLightboxItem(lightboxCurrentIndex + 1);
    }
  }
});

// Keyboard controls
document.addEventListener('keydown', (event) => {
  if (lightbox && !lightbox.hidden) {
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      showLightboxItem(lightboxCurrentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      showLightboxItem(lightboxCurrentIndex + 1);
    } else if (event.key === '+' || event.key === '=') {
      setZoom(zoomScale + 0.3);
    } else if (event.key === '-') {
      setZoom(zoomScale - 0.3);
    } else if (event.key === '0') {
      resetZoom();
    }
  }
});

// Click handlers on images across sections:
document.addEventListener('click', (event) => {
  // Ignore clicks on buttons/links
  if (event.target.closest('button, a, select, input, label')) return;

  // 1. Handover track images
  const handoverCard = event.target.closest('#handover-track .handover-card');
  if (handoverCard) {
    const allHandoverImgs = [...document.querySelectorAll('#handover-track .handover-card img')];
    const clickedImg = handoverCard.querySelector('img');
    const index = allHandoverImgs.indexOf(clickedImg);
    const gallery = allHandoverImgs.map((img, i) => ({
      src: img.src,
      title: img.alt || `Serah Terima Unit #${i + 1}`
    }));
    openLightbox(gallery, Math.max(0, index));
    return;
  }

  // 2. Testimonial track images
  const testimonialCard = event.target.closest('#testimonial-track .testimonial-card');
  if (testimonialCard) {
    const allTestiImgs = [...document.querySelectorAll('#testimonial-track .testimonial-card img')];
    const clickedImg = testimonialCard.querySelector('img');
    const index = allTestiImgs.indexOf(clickedImg);
    const gallery = allTestiImgs.map((img, i) => ({
      src: img.src,
      title: img.alt || `Cerita Pelanggan #${i + 1}`
    }));
    openLightbox(gallery, Math.max(0, index));
    return;
  }

  // 3. Product catalog media images
  const productMedia = event.target.closest('.product-media');
  if (productMedia) {
    const card = productMedia.closest('.product-card');
    const img = productMedia.querySelector('img');
    const carName = card ? card.querySelector('h3')?.textContent : '';
    const carPrice = card ? card.querySelector('.product-price strong')?.textContent : '';
    const title = carName ? `${carName} (Mulai ${carPrice})` : (img?.alt || 'Katalog Mobil');
    if (img) {
      openLightbox([{ src: img.src, title }], 0);
    }
    return;
  }
});

renderProducts();
renderHandoverGallery();
setupSlider(document.querySelector('#testimonial-track'));
setupSlider(document.querySelector('#handover-track'));

// Smooth scroll to product grid when clicking Katalog
document.querySelectorAll('a[href="#product-grid"], a[href="#mobil"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const grid = document.querySelector('#product-grid');
    if (grid) {
      event.preventDefault();
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', '#product-grid');
    }
  });
});

// Floating Salesman Mascot dismiss handler
const salesmanWidget = document.getElementById('floating-salesman');
const salesmanCloseBtn = document.getElementById('salesman-close-btn');

if (salesmanCloseBtn && salesmanWidget) {
  salesmanCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    salesmanWidget.style.opacity = '0';
    salesmanWidget.style.transform = 'scale(0.85)';
    salesmanWidget.style.transition = 'all 0.25s ease-out';
    setTimeout(() => {
      salesmanWidget.style.display = 'none';
    }, 250);
  });
}

