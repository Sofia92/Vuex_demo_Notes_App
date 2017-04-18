<template>
  <div id="toolbar">
    <div class="list-group">
    <i @click="addOne" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred:activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      activeNote(){
        return this.$store.getters.activeNote
      }
    },
    methods:{
      addOne(){
        this.$store.dispatch('addNote')
      },
      toggleFavorite(){
        this.$store.dispatch('toggleFavorite')
      },
      deleteNote(){
        this.$store.dispatch('deleteNote')
      }
    }
  }
</script>

<style type="text/css">
  #toolbar{
    float: left;
    width: 80px;
    height: 100%;
    background-color: #444444;
  }
  #toolbar i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    padding: 10px 15px;
    transition: opacity 0.5s ease;
    color: #ffffff;
  }

  #toolbar i:hover {
    opacity: 1;
  }
  .starred {
    color: #F7AE4F;
  }
</style>


