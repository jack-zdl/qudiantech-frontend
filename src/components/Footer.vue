<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-col footer-brand-col">
        <div class="footer-logo-h">
          <div class="footer-logo-box">趣</div>
          <span class="footer-brand-name">趣电电子商务</span>
        </div>
        <p class="footer-brand-tagline">QD E-Commerce · 让美好生活触手可及</p>
        <p class="footer-desc">趣电致力于为企业提供一站式电商运营与数字化服务解决方案</p>
      </div>
      <div class="footer-col">
        <h4>关于我们</h4>
        <router-link to="/about">公司介绍</router-link>
        <router-link to="/about">发展历程</router-link>
        <router-link to="/about">组织架构</router-link>
        <router-link to="/about">企业文化</router-link>
      </div>
      <div class="footer-col">
        <h4>开放平台</h4>
        <router-link to="/open-platform">业财一账通</router-link>
        <a href="http://8.160.167.158:8005" target="_blank" rel="noopener noreferrer">禅道 ↗</a>
        <a href="https://www.yuque.com/jiaotashidi-b59wx/vk9hg2" target="_blank" rel="noopener noreferrer">开放文档 ↗</a>
        <a href="http://8.160.167.158:18789" target="_blank" rel="noopener noreferrer">AI 数字员工 ↗</a>
      </div>
      <div class="footer-col">
        <h4>联系我们</h4>
        <p>邮箱：contact@qudian.com</p>
        <p>商务：business@qudian.com</p>
        <p>电话：400-000-0000</p>
        <p>地址：上海市浦东新区</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; 2026 趣电电子商务. All rights reserved.</p>
        <p class="footer-icp">沪ICP备xxxxxxxx号</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--dark);
  color: #cbd5e1;
  padding-top: 60px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
}

.footer-logo-h {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.footer-logo-box {
  width: 32px;
  height: 32px;
  background: var(--primary);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  color: var(--white);
}

.footer-brand-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--white);
}

.footer-brand-tagline {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 12px;
}

.footer-brand-col .footer-desc {
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.7;
}

.footer-col h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 16px;
}

.footer-col a,
.footer-col p {
  display: block;
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 8px;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: var(--primary);
}

.footer-bottom {
  border-top: 1px solid #1e293b;
  padding: 20px 0;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #64748b;
}

.footer-icp {
  color: #475569;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
  .footer-brand-col {
    grid-column: 1 / -1;
  }
  .footer-bottom-inner {
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
}
</style>
