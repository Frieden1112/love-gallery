// ===== 配置区域 =====
// 请修改下面的日期为你们在一起的日期
const TOGETHER_DATE = new Date('2022-07-18');  // 格式: YYYY-MM-DD

// 访问密码
const ACCESS_PASSWORD = '0718';

// 背景音乐链接（可选）
// const MUSIC_URL = '你的音乐链接.mp3';

// ===== 密码验证 =====
function checkPassword() {
    const input = document.getElementById('passwordInput');
    const hint = document.getElementById('lockHint');
    
    if (input.value === ACCESS_PASSWORD) {
        // 密码正确，显示主要内容
        document.getElementById('lockScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        // 保存登录状态到 sessionStorage
        sessionStorage.setItem('authenticated', 'true');
    } else {
        // 密码错误
        hint.textContent = '密码错误，请重试';
        input.value = '';
        input.focus();
    }
}

// 回车键提交
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否已登录
    if (sessionStorage.getItem('authenticated') === 'true') {
        document.getElementById('lockScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }
    
    // 回车键提交密码
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

// ===== 状态管理 =====
let currentView = 'masonry';
let currentPhotoIndex = 0;
let photos = [];
let autoplayInterval = null;
let isDarkMode = false;
let isLoveEffectActive = false;
let isLiked = false;

// ===== 工具函数 =====

// 显示 Toast 提示
function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

// ===== 主题管理 =====

// 切换夜间模式
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    const btn = document.getElementById('darkModeToggle');
    btn.classList.toggle('active', isDarkMode);
    btn.querySelector('.icon').textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        const btn = document.getElementById('darkModeToggle');
        btn.classList.add('active');
        btn.querySelector('.icon').textContent = '☀️';
    }
}

// ===== 飘落爱心/花瓣特效 =====

// 创建飘落元素
function createFallingElement() {
    const container = document.getElementById('fallingContainer');
    const hearts = ['💖', '💕', '💗', '💓', '💝', '🌸', '✨', '💫'];
    const element = document.createElement('div');
    element.className = 'falling-heart';
    element.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 15 + 15) + 'px';
    element.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(element);
    
    // 动画结束后移除元素
    setTimeout(() => element.remove(), 7000);
}

// 切换爱心特效
function toggleLoveEffect() {
    isLoveEffectActive = !isLoveEffectActive;
    const btn = document.getElementById('loveEffectToggle');
    btn.classList.toggle('active', isLoveEffectActive);
    
    if (isLoveEffectActive) {
        showToast('💖 爱心特效已开启');
    } else {
        showToast('💖 爱心特效已关闭');
    }
}

// 启动/停止爱心特效
function startLoveEffect() {
    if (isLoveEffectActive) {
        createFallingElement();
        setTimeout(startLoveEffect, 300 + Math.random() * 500);
    }
}

// ===== 背景音乐 =====

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
    
    if (!music) {
        showToast('请在 photos.js 中配置音乐链接');
        return;
    }
    
    if (music.paused) {
        music.play().then(() => {
            btn.classList.add('active');
            showToast('🎵 音乐播放中');
        }).catch(() => {
            showToast('播放失败，请检查音乐链接');
        });
    } else {
        music.pause();
        btn.classList.remove('active');
        showToast('🎵 音乐已暂停');
    }
}

// ===== 分享功能 =====

function shareLink() {
    const url = window.location.href;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast('🔗 链接已复制到剪贴板');
        });
    } else {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast('🔗 链接已复制到剪贴板');
    }
}

function shareCurrentPhoto() {
    const img = document.getElementById('lightboxImg');
    if (navigator.share) {
        navigator.share({
            title: '我们的回忆',
            text: document.getElementById('lightboxDesc').textContent,
            url: img.src
        }).catch(() => {});
    } else {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(img.src).then(() => {
                showToast('📷 照片链接已复制');
            });
        }
    }
}

// ===== 照片下载 =====

function downloadCurrentPhoto() {
    const img = document.getElementById('lightboxImg');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'our-memory-' + Date.now() + '.jpg';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('⬇️ 开始下载...');
}

// ===== 点赞功能 =====

function toggleLike() {
    isLiked = !isLiked;
    const likeIcon = document.getElementById('likeIcon');
    const likeBtn = likeIcon.parentElement;
    
    if (isLiked) {
        likeIcon.textContent = '💖';
        likeBtn.classList.add('liked');
        showToast('💖 已点赞');
    } else {
        likeIcon.textContent = '🤍';
        likeBtn.classList.remove('liked');
    }
}

// 双击点赞动画
function showLikeAnimation(e) {
    if (e.detail === 2) {
        const container = document.querySelector('.lightbox-img-container');
        const animation = document.getElementById('likeAnimation');
        
        // 重置动画
        animation.style.animation = 'none';
        animation.offsetHeight; // 触发重排
        animation.style.animation = 'like-pop 0.8s ease forwards';
        
        if (!isLiked) {
            toggleLike();
        }
    }
}

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

// ===== 渲染照片列表 =====
function getSortedPhotos() {
    if (typeof PHOTOS === 'undefined' || PHOTOS.length === 0) {
        return [];
    }
    // 按日期排序（最新的在前）
    return [...PHOTOS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// 创建照片元素
function createPhotoElement(photo, index) {
    const date = new Date(photo.date);
    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
    
    return `
        <div class="photo-item" data-index="${index}" onclick="openLightbox(${index})">
            <img src="${photo.url}" alt="${photo.desc || '我们的照片'}" loading="lazy">
            <div class="photo-info">
                <div class="date">${formattedDate}</div>
                <div class="desc">${photo.desc || ''}</div>
            </div>
        </div>
    `;
}

// ===== 渲染瀑布流视图 =====
function renderMasonryView() {
    const masonryEl = document.getElementById('photoMasonry');
    
    if (photos.length === 0) {
        masonryEl.innerHTML = '<p class="empty-hint">还没有照片，快去上传吧~</p>';
        return;
    }
    
    masonryEl.innerHTML = photos.map((photo, index) => createPhotoElement(photo, index)).join('');
}

// ===== 渲染九宫格视图 =====
function renderGridView() {
    const gridEl = document.getElementById('photoGrid');
    
    if (photos.length === 0) {
        gridEl.innerHTML = '<p class="empty-hint">还没有照片，快去上传吧~</p>';
        return;
    }
    
    gridEl.innerHTML = photos.map((photo, index) => createPhotoElement(photo, index)).join('');
}

// ===== 渲染时间线视图 =====
function renderTimelineView() {
    const timelineEl = document.getElementById('photoTimeline');
    
    if (photos.length === 0) {
        timelineEl.innerHTML = '<p class="empty-hint">还没有照片，快去上传吧~</p>';
        return;
    }
    
    // 按年月分组
    const groupedPhotos = {};
    photos.forEach((photo, index) => {
        const date = new Date(photo.date);
        const yearMonth = `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月`;
        if (!groupedPhotos[yearMonth]) {
            groupedPhotos[yearMonth] = [];
        }
        groupedPhotos[yearMonth].push({ ...photo, originalIndex: index });
    });
    
    // 生成 HTML
    let html = '';
    Object.keys(groupedPhotos).sort().reverse().forEach(month => {
        html += `
            <div class="photo-timeline-group">
                <div class="timeline-date-header">${month}</div>
                <div class="photo-grid">
                    ${groupedPhotos[month].map(p => createPhotoElement(p, p.originalIndex)).join('')}
                </div>
            </div>
        `;
    });
    
    timelineEl.innerHTML = html;
}

// ===== 渲染所有视图 =====
function renderAllViews() {
    photos = getSortedPhotos();
    renderMasonryView();
    renderGridView();
    renderTimelineView();
    updatePhotoCount();
}

// 更新照片计数
function updatePhotoCount() {
    const countEl = document.getElementById('photoCount');
    const count = photos.length;
    countEl.textContent = `${count} 张照片`;
}

// ===== 视图切换 =====
function switchView(view) {
    currentView = view;
    
    // 更新按钮状态
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // 显示/隐藏对应视图
    const masonryEl = document.getElementById('photoMasonry');
    const gridEl = document.getElementById('photoGrid');
    const timelineEl = document.getElementById('photoTimeline');
    const milestonesSection = document.getElementById('milestonesSection');
    
    masonryEl.classList.toggle('hidden', view !== 'masonry');
    gridEl.classList.toggle('hidden', view !== 'grid');
    timelineEl.classList.toggle('hidden', view !== 'timeline');
    
    // 时间线视图时隐藏纪念日区域，避免重复
    milestonesSection.style.display = view === 'timeline' ? 'none' : 'block';
}

// ===== 照片预览弹窗 / 轮播模式 =====

function openLightbox(index) {
    currentPhotoIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const descEl = document.getElementById('lightboxDesc');
    
    updateLightboxContent();
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 如果是轮播视图，开启自动播放
    if (currentView === 'carousel') {
        startAutoplay();
    }
}

function updateLightboxContent() {
    const img = document.getElementById('lightboxImg');
    const descEl = document.getElementById('lightboxDesc');
    const counterEl = document.getElementById('photoCounter');
    
    const photo = photos[currentPhotoIndex];
    img.src = photo.url;
    descEl.textContent = photo.desc || '';
    counterEl.textContent = `${currentPhotoIndex + 1} / ${photos.length}`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    stopAutoplay();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateLightboxContent();
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateLightboxContent();
}

// ===== 自动播放 =====
function startAutoplay() {
    const autoplayToggle = document.getElementById('autoplayToggle');
    if (!autoplayToggle.checked) return;
    
    stopAutoplay();
    autoplayInterval = setInterval(() => {
        nextPhoto();
    }, 3000);
}

function stopAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }
}

// ===== 事件监听 =====

// 点击背景关闭
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
    }
});

// ESC 键关闭
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
    // 轮播模式下左右键切换
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            prevPhoto();
        } else if (e.key === 'ArrowRight') {
            nextPhoto();
        }
    }
});

// 视图切换按钮
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
});

// 工具栏按钮
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('loveEffectToggle').addEventListener('click', () => {
    toggleLoveEffect();
    if (isLoveEffectActive) {
        startLoveEffect();
    }
});
document.getElementById('musicToggle').addEventListener('click', toggleMusic);
document.getElementById('shareBtn').addEventListener('click', shareLink);

// 自动播放开关
document.getElementById('autoplayToggle').addEventListener('change', function() {
    if (this.checked) {
        startAutoplay();
    } else {
        stopAutoplay();
    }
});

// 双击点赞
document.querySelector('.lightbox-img-container').addEventListener('click', showLikeAnimation);

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    // 显示骨架屏
    document.getElementById('skeleton').classList.add('show');
    
    // 模拟加载延迟
    setTimeout(() => {
        // 隐藏骨架屏
        document.getElementById('skeleton').classList.remove('show');
        
        // 初始化
        initTheme();
        updateLoveCounter();
        renderTimeline();
        renderAllViews();
        switchView('masonry');
        
        // 如果启用了爱心特效，开始飘落
        if (isLoveEffectActive) {
            startLoveEffect();
        }
    }, 800);
});

// 触摸滑动支持
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('lightbox').addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.getElementById('lightbox').addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextPhoto();
        } else {
            prevPhoto();
        }
    }
}
