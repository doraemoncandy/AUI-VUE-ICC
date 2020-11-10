<template>
    <div class="pagination" v-if="lastPage > 1">
    <div class="leftSide">
        <a href="javascript:;" @click="setCurrentPageIndex('prev')"><span class="fa fa-angle-double-left"></span></a>
        <template v-for="index in lastPage">
            <a 
                :key="index"
                :class="{active: index === currentPageLocal}"
                href="javascript:;" 
                @click="setCurrentPage(index)"
                v-if="index < pageOffset + maxPage && index >= pageOffset"
            >{{index}}</a>
        </template>
        <a href="javascript:;" @click="setCurrentPageIndex('next')"><span class="fa fa-angle-double-right"></span></a>
    </div>
    <div class="rightSide" value="Go To Page">
        <span multiLang="row_213">{{textGoToPage}}</span>:<input type="text" :value="currentPageLocal" class="gotoPage" maxlength="3" v-on:keyup.enter="setCurrentPageTo" @keypress="isNumber($event)" @focus="$event.target.select()" >/ {{lastPage}}
    </div>
</div>
</template>

<script>
export default {
    props: {
        lastPage: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        textGoToPage: {
            type: String,
            default: 'Go To Page'
        }
    },
   data: function() {
        return {
            currentPageLocal: 1,
            pageOffset: 1,
            maxPage: 5
        };
    },
    methods: {
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        checkIsOverVisiblePage() {
            if (this.currentPageLocal < this.pageOffset) {
                this.pageOffset -= this.maxPage;
            }
            if (this.currentPageLocal >= this.pageOffset + this.maxPage) {
                this.pageOffset += this.maxPage;
            }
        },
        setCurrentPage(page) {
            this.currentPageLocal = page;
            this.checkIsOverVisiblePage();
            this.$emit('setcurrentpage', page);
        },
        setCurrentPageIndex(type) {
            if (type === 'prev') {
                if (this.currentPageLocal > 1) {
                    this.currentPageLocal -= 1;
                    this.checkIsOverVisiblePage();
                    this.$emit('setcurrentpage', this.currentPageLocal);
                } 
            } else if (type === 'next') {
                if (this.currentPageLocal < this.lastPage) {
                    this.currentPageLocal += 1;
                    this.checkIsOverVisiblePage();
                    this.$emit('setcurrentpage', this.currentPageLocal);
                } 
            }
        },
        setCurrentPageTo : function(e){
            if(e.currentTarget.value <= this.lastPage && e.currentTarget.value > 0){
                this.setCurrentPage(parseFloat(e.currentTarget.value));
            } else {
                const temp = this.currentPageLocal;
                this.currentPageLocal = 0;
                this.currentPageLocal = temp;
            }
        },
    },
    mounted: function() {
        this.currentPageLocal = this.currentPage;
    }
}
</script>