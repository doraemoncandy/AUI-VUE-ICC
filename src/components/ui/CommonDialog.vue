<template>
<transition name="fade">
<div class="commonDialog" v-if="isShow">
    <div class="dialogBlock">
        <div class="dialogWrapper">
            <div class="dialogContainer">
                <div class="dialogTitle">{{title}}</div>
                <div class="dialogContent">
                    <div class="dialogContentTitle">{{contentTitle}}</div>
                    <div class="dialogContentButton">
                        <a href="javascript:;" v-for="(button, index) in buttonOptions" :key="index" class="roundButton" @click="handleButtonClick(button.type)">{{button.text}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</transition>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Please give me a title'
        },
        contentTitle: {
            type: String,
            default: 'Please give me a content title'
        },
        buttonOptions: {
            type: Array,
            default: () => [
                {
                    text: 'row_60',
                    type: 'cancel'
                },
                {
                    text: 'row_61',
                    type: 'confirm'
                }
            ]
        },
        isShow: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        handleButtonClick(type) {
            this.$emit('handle-button-click', type);
        },
    },
}
</script>