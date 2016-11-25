export default {};

export const orderGrid = {
  data() {
    return {
      orderGrid: [
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
        {
          iconColor: '#333',
          position: 'bottom',
          text: '待付款',
        },
      ],
    };
  },
};

export const doGrid = {
  data() {
    return {
      doGrid: [
        {
          iconClass: 'i i-pushmoney',
          number: '',
          text: '充值',
        },
        {
          iconClass: 'i i-tel',
          number: '',
          text: '更新信息',
        },
      ],
    };
  },
};

export const navGrid = {
  data() {
    return {
      navGrid: [
        {
          iconClass: 'i i-index',
          number: '',
          text: '首页',
        },
        {
          iconClass: 'i i-search',
          number: '',
          text: '分类搜索',
        },
        {
          iconClass: 'i i-shoppingcart',
          number: '',
          text: '购物车',
        },
        {
          iconClass: 'i i-member',
          number: '',
          text: '我的',
        },
        {
          iconClass: 'i i-index',
          number: '',
          text: '首页',
        },
        {
          iconClass: 'i i-search',
          number: '',
          text: '分类搜索',
        },
        {
          iconClass: 'i i-shoppingcart',
          number: '',
          text: '购物车',
        },
        {
          iconClass: 'i i-member',
          number: '',
          text: '我的',
        },{
          iconClass: 'i i-index',
          number: '',
          text: '首页',
        },
        {
          iconClass: 'i i-search',
          number: '',
          text: '分类搜索',
        },
        {
          iconClass: 'i i-shoppingcart',
          number: '',
          text: '购物车',
        },
        {
          iconClass: 'i i-member',
          number: '',
          text: '我的',
        }

      ],
    };
  },
  methods: {
    // 点击跳转
    goLink(item) {
      let link = '/';
      switch (item.text) {
        case '首页':
          link = '/';
          break;
        case '分类搜索':
          link = '/categories';
          break;
        case '购物车':
          link = '/cart';
          break;
        case '我的':
          link = '/user';
          break;
        default:
          link = '/';
          break;
      }
      this.$router.push(link);
    },
  },
};
