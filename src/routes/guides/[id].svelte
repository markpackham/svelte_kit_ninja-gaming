<script context="module">
    export async function load({ page, fetch }) {
      const id = page.params.id
      // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const res = await fetch(`/guides/${id}.json`)
      const {guide} = await res.json()
      if (res.ok) {
        return {
          props: {
            guide
          }
        }
      }
      return {
        // 301 is a redirect status
        status: 301,
        // error: new Error('Could not fetch that guide')
        redirect: '/guides'
      }
    }
  </script>
  
  <script>
    export let guide
  </script>
  
  <div class="guide">
    <h2>{guide.title}</h2>
    <p>{guide.body}</p>
  </div>
  
  <style>
    .guide {
      margin-top: 2.5rem;
      padding: 0.625rem;
      border: 0.0625rem dotted hsla(0, 0%, 100%, 0.2)
    }
  </style>