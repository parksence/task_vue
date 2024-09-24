<template>
  <div id="grid">
    <grid :data="pagedData"
          :columns="gridProps.columns"
          :pageOptions="pageOptions"
          :pagination="true"
          @click="onclick"
          @page-change="onPageChange"
    />
  </div>
</template>

<script>
import { Grid } from '@toast-ui/vue-grid';
import { mapGetters } from 'vuex';
import 'tui-grid/dist/tui-grid.css';
import 'tui-pagination/dist/tui-pagination.css';

export default {
  components:  {
    grid: Grid
  },
  data() {
    return {
      gridProps: {
        data: [], // 모든 데이터를 저장할 배열
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
      },
      pageOptions: {
        useClient: true, // 클라이언트 측 페이징 활성화
        perPage: 10, // 한 페이지에 3개의 항목
        visiblePages: 5, // 화면에 표시할 페이지 번호 수
        centerAlign: true, // 페이지 번호 중앙 정렬 (옵션)
      },
      currentPage: 1, // 현재 페이지
    };
  },
  created() {
    const data = [];

    for (let i = 1; i <= 100; i++) {
      data.push({
        no: i,
        title: `안녕하세요${i}`,
        author: `박희준${i}`,
        comment_cnt: this.getCommentCount(i) // 댓글 수 가져오기
      });
    }

    this.gridProps.data = data; // 생성한 데이터 할당
  },
  computed: {
    ...mapGetters(['getCommentCount']), // 댓글 수 getter 추가
    pagedData() {
      const start = (this.currentPage - 1) * this.pageOptions.perPage;
      return this.gridProps.data.slice(start, start + this.pageOptions.perPage);
    }
  },
  methods: {
    onclick(ev) {
      if (ev.columnName === 'title' && ev.rowKey + 1) {
        const post = this.gridProps.data[ev.rowKey];
        const postId = post.no;
        const postTitle = post.title;

        // 새 탭에서 상세 페이지 열기
        window.open(`/detail/${postId}/${encodeURIComponent(postTitle)}`, '_blank');
      }
    },
    onPageChange(page) {
      this.currentPage = page; // 페이지 변경 시 현재 페이지 업데이트
    }
  }
};
</script>

<style>

</style>
