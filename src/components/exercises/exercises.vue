<template>
  <div class="card m-3">
    <div class="card-header">
      <h3 class="card-title d-inline">
        {{ $t('exercises.title') }}
      </h3>

      <program-modal v-if="token" :token="token" />
    </div>
    <div class="card-body">
      <div class="col-12">
        <div class="row">
          <div v-for="item in items" :key="item.id" class="col-4">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title d-inline">
                  {{ item.title }}
                </h3>
                <button v-if="token" class="btn btn-danger btn-sm float-right" type="button" @click="deleteProgram(item)">
                  <i class="fas fa-trash-alt" />
                </button>
              </div>
              <div class="card-body">
                <span>
                  {{ item.content }}
                </span>
              </div>
              <div class="card-footer footer-padding">
                <span class="author-style">{{ $t('exercises.author') }}: {{ item.author.nickname }}</span>
                <span class="author-style float-right" style="padding-top: 6px">{{ getHumanizedDatetime(fromUTC(item.created_at)) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ProgramModal from './program-modal';
    import dateTimeFormatter from '../mixins/dateTimeFormatter';

    export default {
        name: 'Exercises',

        components: {
            ProgramModal
        },

        mixins: [
          dateTimeFormatter
        ],

        data: () => ({
            items: null,
            token: null,
        }),

        mounted() {
            this.getPrograms();
            window.eventHub.$on('logged-in-user', this.getToken);
        },

        methods: {
            async getPrograms() {
                const response = await window.axios.get('http://localhost:8000/programs');
                this.items = response.data;
            },

            getToken(data) {
                this.token = data;
            },

            deleteProgram(item) {
                try {
                    const config = {
                        headers: { Authorization: `Bearer ${this.token}` }
                    };

                    window.axios.delete('http://localhost:8000/programs/' + item.id, config);

                    this.items.splice(this.items.indexOf(item), 1);

                    window.toastr.success(this.$i18n.t('exercises.messages.delete'));
                } catch (error) {
                    if (error.response) {
                        window.toastr.error(error.response.data.error);
                    }
                }
            }
        }
    }
</script>

<style scoped>
  .author-style {
    font-size: 11px;
    color: #6d6a6af2;
  }

  .footer-padding {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }
</style>