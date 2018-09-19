<template>
    <div v-bind:class="['badge-icon ' + 'badge-' + colorType]">
        <span class="btn-label">
            <i class="material-icons">
                {{ icon }}
            </i>
        </span>
        <span>
            {{ title }}
        </span>
    </div>
</template>

<script>
/**
 * Used labelling objects.
 */
export default {
    name: "BadgeIcon",
    status: "ready",
    release: "1.0.0",
    model: {
        prop: "active",
    },
    props: {
        colorType:{
            type:String,
            default:'secondary'
        },
        icon:{
            type:String,
            //required:true,
            default:'book'
        },
        title:{
            type:String,
            //required:true,
            default:'Livre'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>

</style>

<docs>
  ```jsx
  <BadgeIcon />
  ```
</docs>
