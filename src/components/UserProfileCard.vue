<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src="https://i.imgur.com/WVkkrFw.jpeg"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">root</h5>
          <p class="card-text">root@example.com</p>
          <ul class="list-unstyled list-inline">
            <li><strong>40</strong> 已評論餐廳</li>
            <li><strong>5</strong> 收藏的餐廳</li>
            <li><strong>2</strong> followings (追蹤者)</li>
            <li><strong>3</strong> followers (追隨者)</li>
          </ul>
          <p></p>
          <form
            action="/following/1?_method=DELETE"
            method="POST"
            style="display: contents"
          >
            <button type="submit" class="btn btn-danger">取消追蹤</button>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>