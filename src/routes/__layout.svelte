<script context='module'>
  	export const load = async ({ session }) => {
		return {
			props: {
				user: session.user
			}
		};
	}
</script>
<script>
import Header from "../components/Header.svelte";
import Footer from "../components/Footer.svelte";
import "../app.css";

export let user
</script>
  <Header {user} />
    <slot />
  <Footer/>
