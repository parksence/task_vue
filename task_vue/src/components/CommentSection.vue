<template>
  <div>
    <h3>댓글</h3>
    <textarea v-model="newComment" placeholder="댓글을 등록하세요."></textarea><br/>
    <button @click="submitComment">댓글 남기기</button>
    <div class="line"></div>
    <div v-for="(comment, index) in comments" :key="index">
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newComment: '',
      localComments: []
    };
  },
  created() {
    // store 불러오는지 확인
    // console.log(this.$store);
    this.localComments =  this.getComments(this.postId);
  },
  computed: {
    ...mapGetters(['getComments']),
    comments() {
      return this.getComments(this.postId);
    }
  },
  methods: {
    ...mapActions(['addComment']),
    submitComment() {
      if (this.newComment) {
        // 댓글 추가
        this.addComment({ postId: this.postId, comment: this.newComment });

        // 댓글 직접 업데이트
        this.newComment = ''; // 댓글 입력 초기화
        this.comments.push(this.newComment); // 새로운 댓글 추가
      }
    }
  }
};
</script>

<style>
/* 스타일 추가 가능 */
.line{border-top: 1px solid #35495e; text-align: center; font-size: 16px; color: #41b883; margin: 10px 0 0 0;}
</style>
