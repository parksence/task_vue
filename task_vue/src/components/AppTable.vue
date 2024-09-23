<template>
  <div id="grid">
    <grid :data="gridProps.data"
          :columns="gridProps.columns"
          @click="onclick"
    />
  </div>
</template>

<script>
import 'tui-grid/dist/tui-grid.css';
import { Grid } from '@toast-ui/vue-grid';
import { mapGetters } from 'vuex';

export default {
  components: { grid: Grid },
  data() {
    return {
      gridProps: {
        data: [], // 데이터 초기화
        columns: [
          {
            header: 'No',
            name: 'no',
            sortable: true,
            compare: (a, b) => a - b
          },
          {
            header: '제목',
            name: 'title',
            formatter: ({ value }) => `<strong>${value}</strong>`
          },
          {
            header: '작성자',
            name: 'author'
          },
          {
            header: '댓글수',
            name: 'comment_cnt',
            sortable: true,
            compare: (a, b) => a - b
          },
        ]
      }
    };
  },
  computed: {
    ...mapGetters(['getCommentCount']), // 댓글 수 getter 추가
  },
  created() {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        no: i,
        title: `안녕하세요${i}`,
        author: `박희준${i}`,
        comment_cnt: this.getCommentCount(i) // 댓글 수 가져오기
      });
    }

    this.gridProps.data = data; // 생성한 데이터 할당
  },
  methods: {
    onclick(ev) {
      if (ev.columnName === 'title' && ev.rowKey + 1) {
        const post = this.gridProps.data[ev.rowKey];
        const postId = post.no;
        const postTitle = post.title;

        // 새 탭에서 상세 페이지 열기
        window.open(`/detail/${postId}/${encodeURIComponent(postTitle)}`, '_blank');
      } else {
        console.log('sorry');
      }
    }
  }
};
</script>

<style>
/* 스타일 추가 가능 */
</style>
