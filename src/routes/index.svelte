<script>
    let title = 'Ninja Gaming Guides'
    const updateTitle = () => {
      title = "Something different"
    }
  </script>
  
  <div class="index">
    <h2>{title}</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia maxime delectus, eaque, id exercitationem fugit ea ad doloribus tempore porro aut mollitia minima quisquam, vel totam animi nesciunt nihil aperiam.</p>  
    <button on:click={updateTitle}>Change title</button>
    <input type="text" bind:value={title}>
  </div>
  
  <style>
    .index {
      text-align: center;
      display: block;
      margin: 20px auto;
    }
  </style>