<!-- 
Utiliser pour encapsuler une activité 
Incluant la fonction complétion
-->

<template>
    <div class="card activity-card">
        <div class="card-header">
            <BadgeIcon
                class="justify-content-end"  
                v-bind:icon="icon"
                v-bind:title="title"
                v-bind:colorType="colorType"
                >
            </BadgeIcon>
        </div>
        <div class="card-body">
            <!--<h5 class="card-title"> title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>-->
            <slot></slot>
        </div>
        <b-card-footer footer-bg-variant="warning" class="text-center">
            
                <div class="col-md-12">
                    <b-form-checkbox v-bind:id="id"
                                    value="accepted"
                                    unchecked-value="not_accepted">
                    {{ checkTerm }}
                    </b-form-checkbox>
                    <!--<b-button variant="warning">
                        
                        J'ai terminé cette activité
                    </b-button>-->
                </div>
        </b-card-footer>
    </div>
</template>

<script>
import BadgeIcon from '@/instructionals/BadgeIcon.vue'

export default {
    name: "ActivityCard",
    status: "ready",
    release: "1.0.0",
    model: {
        prop: "active",
    },
    /**
     * Used for labelling the activity.
     */
    components: {
        BadgeIcon
        },
    props: {
        icon:{
            type:String,
            //required:true,
            default:'book'
        },
        title:{
            type:String,
            //required:true,
            default:'Livre'
        },
        colorType:{
            type:String,
            default:'secondary'
        },
        id:{
            type: String,
            default: 'HST2125-S01-A01'
        },
        checkTerm:{
            type:String,
            default: 'J\'ai terminé cette activité'
        }
    }
}
</script>

<style>
.card-header {
    padding: 0;
}
.card-header .badge-icon {
    border-radius: 0.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    display: inline-block;
    margin: 0;
    font-weight: 300;
    text-align: left;
    vertical-align: middle;
    /* touch-action: manipulation; */
    cursor: inherit;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    /* padding: 6px 12px; */
    font-size: 14px;
    line-height: 1.644;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 6px 0 6px;
    padding: 0 0.375rem 0 0.375rem;
}
.card-footer{
    padding: 0 0.375rem 0 0.375rem;
}
.card-body + .carousel {
    padding: 0;
}
.card-body .card-header {
    padding: 0.25rem
}
.card-body {
    padding: 0
}
.tabs {
    margin-top: 0;
}
.tab-content {
    padding: 1.25rem;
}
</style>