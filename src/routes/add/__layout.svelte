<script context='module'>
export async function load({session}){
    if (!session.user || session.user === "") {
        return {redirect: "/", status: 302}
    }
    return {props: {}}
}
</script>

<slot></slot>