<template>
<transition name="fade">
<div class="groupDialog dialog" v-if="isShow">
    <div class="dialogBlock">
        <div class="dialogWrapper">
            <div class="dialogContainer">
                <div class="dialogTitle">{{title}}</div>
                <div class="dialogContent">
                    <div class="inputSection">
                        <template v-for="(option, index) in inputOptions">
                            <div :key="index">
                                <div class="editGroupNameLabel">{{option.name}}<sup class="required" v-if="option.required">*</sup></div>
                                <div class="editGroupNameInput">
                                    <input type="text" :value="inputValues[index]" @keyup="handleKeyUp($event, index)" :maxlength="getMaxLength(index)" ref="inputFields">
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="actionButtons">
                        <a href="javascript:;" class="roundButton dialogCancelButton" @click="handleClick('cancel')">{{cancel}}</a>
                        <a href="javascript:;" 
                        class="roundButton dialogConfirmButton"
                        @click="handleClick('confirm')"
                        >{{confirm}}</a>
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
        inputOptions: {
            type: Array,
            default: () => [],
        },
        placeholder: {
            type: Array,
            default: () => [],
        }, 
        cancel: {
            type: String,
            default: 'Cancel'
        },
        confirm: {
            type: String,
            default: 'Confirm'
        },
        isShow: {
            type: Boolean,
            default: false,
        },
		restrictedCharacters: {
			type: Array,
			default: null,
		}
    },
   	data: function() {
        return { 
            inputValues: []
        }
    },
    methods: {
        handleClick(type) {
            if (type === 'cancel') {
                this.inputValues = this.placeholder;
                this.inputOptions.forEach((option, index) => {
                    this.$refs.inputFields[index].classList.remove('error');
                });
                this.$emit('get-input-values', false);
            } else if (type === 'confirm') {
                let shouldEmit = true;
                this.inputOptions.forEach((option, index) => {
                    if (option.required) {
                        if (!this.inputValues[index] || this.inputValues[index] === '') {
                            shouldEmit = false;
                            this.$refs.inputFields[index].classList.add('error');
                        }
                        else this.$refs.inputFields[index].classList.remove('error');
                    }
                });

                if (shouldEmit) {
                    this.$emit('get-input-values', this.inputValues);
                    this.inputValues = [];
                }
            }
        },
        getMaxLength(index) {
            if (index === 0) return 30;
            else if (index === 1) return 50;
        },
		handleKeyUp(event, index) {
			if (this.restrictedCharacters[index]) this.$set(this.inputValues, index, event.target.value.replace(this.restrictedCharacters[index], ''));
			else this.$set(this.inputValues, index, event.target.value);
		}
    },
    computed: {
        shouldDisable() {
            return !this.inputValues[0] || this.inputValues[0] === "";
        },
    }, 
    mounted: function() {
        this.inputValues = this.placeholder;
    }
}
</script>