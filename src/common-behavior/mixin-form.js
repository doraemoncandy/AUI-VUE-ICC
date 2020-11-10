import { uuid } from 'vue-uuid';
export default{
    props:{
        title: {
            style: String,
            default: ''
        },
        placeholder: {
            style: String,
            default: ''
        },
        value:{
            default: ''
        },
        isError:{
            type: Boolean,
            default: false
        },
        isDisable:{
            type: Boolean,
            default: false
        },
        wd:{
            type: String,
            default: 'md'
        },
        isRequired:{
            type: Boolean,
            default: false
        },
        id:{
            default: ''
        }

    },
    computed: {
        privateValue:{
            get(){
            return this.value;
            },
            set(val){
            // console.log('val', val);
                this.$emit('update:value', val);
            }
        },
        privateIsError:{
            get(){
                return this.isError
            },
            set(val){
                this.$emit('update:isError', val);
            }
        },
    privateId:{
            get(){
                return this.id === '' ? uuid.v1() : this.id;
            },
            set(val){
                this.$emit('update:id', val);
            }
        } 
    },
    data () {
        return {
                    }
    },
    created(){
    }
} // end: export