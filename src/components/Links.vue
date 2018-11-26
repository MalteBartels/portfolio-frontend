<template>
    <div id="links">
        <Link v-for="(profile, index) in profiles" 
                :key="profile.key" 
                :url="profile.url" 
                :img="profile.img"
                :offset="index*100" />
    </div>
</template>

<script>
import Link from "./Link";
export default {
    name: "Links",
    components: {
        Link,
    },
    props: [ "profiles" ]
}
</script>

