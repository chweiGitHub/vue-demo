<template id="upload">
  <div class="upload-file">
    <h3>文件上传：</h3>
    选择一个文件上传: <br />
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="logo" size="50" />
        <br />
        <input type="file" name="logo" size="50" />
        <br />
        <input type="file" name="logo" size="50" />
        <br />
        <input type="submit" value="上传文件" />
    </form>
  </div>
</template>

<script>
  export default{
    data(){
      return{};
    }
  }

</script>
