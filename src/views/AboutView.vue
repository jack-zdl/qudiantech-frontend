<template>
  <div class="about-page">
    <!-- 横幅 -->
    <div class="page-banner">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-desc">了解上海趣电电子商务有限公司</p>
      </div>
    </div>

    <!-- 公司简介 -->
    <section class="section intro-section">
      <div class="container">
        <div class="intro-content">
          <h2 class="section-title">公司简介</h2>
          <div class="intro-card">
            <p class="intro-text">
              上海趣电电子商务有限公司，简称"趣电"，是一家处于快速发展期的综合型电子商务企业。业务起步于 2020 年，工商主体成立于 2021 年 8 月，总部位于上海市长宁区通协路 268 号尚品都汇 B807 室，并在深圳、安徽、山西设有分公司或业务分部，在香港、俄罗斯设有办事处。
            </p>
            <p class="intro-text">
              趣电以电子商务为核心，深耕国内电商运营和跨境电商运营两大业务板块，围绕家电、3C 数码、家具、母婴、游戏外设、工业工具、康养产品等消费与产业类目，持续构建平台运营能力、供应链整合能力、品类拓展能力和数字化经营能力。目前营收规模约 4-5 亿元人民币，在职员工约 100 人。
            </p>
            <div class="intro-motto">
              <span class="motto-icon">🎯</span>
              <span>让美好生活触手可及</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="section timeline-section">
      <div class="container">
        <h2 class="section-title">发展历程</h2>
        <div class="timeline">
          <div v-for="(item, index) in timeline" :key="index" class="timeline-item">
            <div class="tl-dot">
              <div class="tl-dot-inner"></div>
            </div>
            <div class="tl-content">
              <span class="tl-year">{{ item.year }}</span>
              <h3 class="tl-title">{{ item.title }}</h3>
              <p class="tl-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 组织架构 -->
    <section class="section org-section">
      <div class="container">
        <h2 class="section-title">组织架构</h2>
        <div class="org-grid">
          <div v-for="item in orgList" :key="item.name" class="org-card">
            <div class="org-card-top">
              <span class="org-icon">{{ item.icon }}</span>
              <h3 class="org-name">{{ item.name }}</h3>
            </div>
            <p class="org-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section class="section culture-section">
      <div class="container">
        <h2 class="section-title">企业文化</h2>
        <div class="culture-grid">
          <div v-for="item in cultureList" :key="item.title" class="culture-card">
            <div class="culture-icon-wrap">
              <span class="culture-icon">{{ item.icon }}</span>
            </div>
            <h3 class="culture-title">{{ item.title }}</h3>
            <p class="culture-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const timeline = [
  {
    year: '2020',
    title: '业务起步',
    description: '趣电业务正式起步，主营拼多多大家电业务，从国内电商切入，以大家电类目为核心，逐步建立基础业务盘。',
  },
  {
    year: '2021',
    title: '公司成立',
    description: '上海趣电电子商务有限公司工商主体成立，全年营收达到约 5,000 万元，进入规范化发展阶段。',
  },
  {
    year: '2022',
    title: '多平台拓展',
    description: '启动京东平台业务，从单一平台向多平台运营拓展，单品牌营收突破 1 亿元，全年营收约 1.3 亿元。',
  },
  {
    year: '2023',
    title: '多品类协同',
    description: '启动分销业务，开拓厨电、清洁电器等新业务板块，全年营收突破 3 亿元。同年 11 月正式启动跨境电商业务。',
  },
  {
    year: '2024',
    title: '跨境加速',
    description: '成立深圳分公司，开拓墨西哥、日本等市场。国内业务突破 4.5 亿元，跨境突破 1,000 万元，整体营收突破 4.7 亿元，团队规模接近 100 人。',
  },
  {
    year: '2025',
    title: '组织升级',
    description: '进入组织升级阶段，系统化引进自动化、RPA、AI 等技术能力，推动业务从人力驱动向系统化、数据化、智能化运营升级。',
  },
  {
    year: '2026-2030',
    title: '全球消费产业集团',
    description: '围绕全球消费产业、跨境业务增长、供应链能力建设和 AI 技术应用，力争发展为具备国际化能力的全球消费产业集团。',
  },
]

const orgList = [
  {
    icon: '🏛️',
    name: '经营管理层',
    description: '负责公司战略规划、业务方向、组织建设和重大经营决策，推动公司从规模增长走向高质量增长。',
  },
  {
    icon: '🛒',
    name: '国内电商业务中心',
    description: '负责拼多多、京东、淘天等国内平台的店铺运营、品类运营、活动运营、销售管理和数据分析。',
  },
  {
    icon: '🌐',
    name: '跨境电商业务中心',
    description: '负责 Ozon、美客多、亚马逊、乐天等海外平台运营，重点面向俄罗斯、墨西哥、日本、中东等市场。',
  },
  {
    icon: '📦',
    name: '供应链与商品中心',
    description: '负责商品开发、供应商管理、采购协同、库存管理、履约协同和商品生命周期管理。',
  },
  {
    icon: '🤖',
    name: '技术与数字化中心',
    description: '负责信息化系统、数据看板、流程自动化、RPA 工具和 AI 应用落地，推动数字化、智能化升级。',
  },
  {
    icon: '👥',
    name: '人力行政中心',
    description: '负责招聘、培训、组织发展、绩效管理、企业文化、行政管理和员工关系。',
  },
  {
    icon: '💰',
    name: '财务管理中心',
    description: '负责财务核算、预算管理、税务管理、资金管理、经营分析和成本控制。',
  },
]

const cultureList = [
  {
    icon: '🎯',
    title: '公司愿景',
    description: '成为有影响力、受人尊敬、创造价值的全球消费产业集团。',
  },
  {
    icon: '💡',
    title: '公司使命',
    description: '给消费者提供优质的产品及服务，让美好生活触手可及；助力商业成功，发现更多可能；让员工能够快乐、体面地生活。',
  },
  {
    icon: '🤝',
    title: '创造价值 · 分享利他',
    description: '以价值创造为导向，鼓励团队成员保持诚信、务实、进取、开放的工作态度。',
  },
  {
    icon: '🚀',
    title: '创新求变 · 追求卓越',
    description: '持续创新，拥抱变化；追求卓越，持续提升组织效率和业务质量。',
  },
]
</script>

<style scoped>
.page-banner {
  padding: 100px 0 60px;
  background: linear-gradient(135deg, var(--dark) 0%, #4a200a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.page-title {
  font-size: 40px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 12px;
}

.page-desc {
  font-size: 16px;
  color: #94a3b8;
}

/* 公司简介 */
.intro-section {
  background: var(--white);
}

.intro-content {
  max-width: 780px;
  margin: 0 auto;
}

.intro-card {
  padding: 36px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: left;
}

.intro-text {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-secondary);
  margin-bottom: 16px;
  text-indent: 2em;
}

.intro-motto {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 8px 24px;
  background: var(--primary-light);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
}

/* 发展历程 */
.timeline-section {
  background: var(--bg-light);
}

.timeline {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 19px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

.timeline-item {
  position: relative;
  padding-bottom: 36px;
  display: flex;
  align-items: flex-start;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.tl-dot {
  position: absolute;
  left: -40px;
  top: 4px;
  width: 40px;
  display: flex;
  justify-content: center;
}

.tl-dot-inner {
  width: 12px;
  height: 12px;
  background: var(--white);
  border: 3px solid var(--primary);
  border-radius: 50%;
  margin-top: 4px;
}

.tl-content {
  padding: 16px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 10px;
  width: 100%;
  transition: all 0.2s;
}

.tl-content:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.tl-year {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--white);
  background: var(--primary-gradient);
  margin-bottom: 8px;
}

.tl-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text);
}

.tl-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 组织架构 */
.org-section {
  background: var(--white);
}

.org-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 960px;
  margin: 0 auto;
}

.org-card {
  padding: 24px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: all 0.2s;
}

.org-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.org-card-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.org-icon {
  font-size: 22px;
}

.org-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}

.org-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 企业文化 */
.culture-section {
  background: var(--bg-light);
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 960px;
  margin: 0 auto;
}

.culture-card {
  padding: 28px 20px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
  transition: all 0.2s;
}

.culture-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.culture-icon-wrap {
  width: 56px;
  height: 56px;
  background: var(--primary-light);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.culture-icon {
  font-size: 24px;
}

.culture-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text);
}

.culture-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .org-grid {
    grid-template-columns: 1fr 1fr;
  }
  .culture-grid {
    grid-template-columns: 1fr 1fr;
  }
  .intro-card {
    padding: 24px;
  }
}
</style>
