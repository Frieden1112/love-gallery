// ===== 配置区域 =====
// 请修改下面的日期为你们在一起的日期
const TOGETHER_DATE = new Date('2024-01-01');  // 格式: YYYY-MM-DD

// ===== 计算恋爱天数 =====
function calculateLoveDays() {
    const today = new Date();
    const diffTime = Math.abs(today - TOGETHER_DATE);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// ===== 更新页面显示 =====
function updateLoveCounter() {
    const daysEl = document.getElementById('loveDays');
    const startDateEl = document.getElementById('startDate');
    
    daysEl.textContent = calculateLoveDays();
    
    // 格式化开始日期
    const year = TOGETHER_DATE.getFullYear();
    const month = String(TOGETHER_DATE.getMonth() + 1).padStart(2, '0');
    const day = String(TOGETHER_DATE.getDate()).padStart(2, '0');
    startDateEl.textContent = `${year}.${month}.${day}`;
}

// ===== 渲染纪念日时间线 =====
function renderTimeline() {
    const timelineEl = document.getElementById('timeline');
    
    if (typeof MILESTONES === 'undefined' || MILESTONES.length === 0) {
        timelineEl.innerHTML = '<p class="empty-hint">还没有添加纪念日，快去 photos.js 添加吧~</p>';
        return;
    }
    
    // 按日期排序（最新的在前）
    const sortedMilestones = [...MILESTONES].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    timelineEl.innerHTML = sortedMilestones.map(item => {
        const date = new Date(item.date);
        const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
        
        return `
            <div class="timeline-item">
                <div class="timeline-date">${formattedDate}</div>
                <div class="timeline-title">${item.title}</div>
            </div>
        `;
    }).join('');
}

// ===== 渲染照片墙 =====
function renderPhotoGrid() {
    const gridEl = document.getElementById('photoGrid');
    
    if (typeof PHOTOS === 'undefined' || PHOTOS.length === 0) {
        gridEl.innerHTML = '<p class="empty-hint">还没有照片，快去上传吧~</p>';
        return;
    }
    
    // 按日期排序（最新的在前）
    const sortedPhotos = [...PHOTOS].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    gridEl.innerHTML = sortedPhotos.map((photo, index) => {
        const date = new Date(photo.date);
        const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
        
        return `
            <div class="photo-item" onclick="openLightbox('${photo.url}', '${photo.desc || ''}')">
                <img src="${photo.url}" alt="${photo.desc || '我们的照片'}" loading="lazy">
                <div class="photo-info">
                    <div class="date">${formattedDate}</div>
                    <div class="desc">${photo.desc || ''}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 照片预览弹窗 =====
function openLightbox(url, desc) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const descEl = document.getElementById('lightboxDesc');
    
    img.src = url;
    descEl.textContent = desc;
    lightbox.classList.add('active');
    
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// 点击背景关闭
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// ESC 键关闭
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    updateLoveCounter();
    renderTimeline();
    renderPhotoGrid();
});
