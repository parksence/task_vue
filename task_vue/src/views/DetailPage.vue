<template>
  <div>
    <h1>게시물 상세</h1>
    <!-- 게시물 내용 표시 부분 -->
    <h3>{{ postTitle }}</h3>
    <CommentSection :postId="postId" />
  </div>
</template>

<script>
import CommentSection from '../components/CommentSection.vue';

export default {
  components: {
    CommentSection
  },
  data() {
    return {
      postId: Number(this.$route.params.id), // 게시물 ID 가져오기
      postTitle: decodeURIComponent(this.$route.params.title), // 게시물 제목 가져오기
    };
  }
};
</script>
