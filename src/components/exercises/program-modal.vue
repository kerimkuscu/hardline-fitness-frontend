<template>
  <div
    class="modal in"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ProgramModal"
    aria-hidden="false"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ $t('exercises.add') }}
          </h5>
        </div>

        <div class="modal-body">
          <form @submit.prevent="submit">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                v-model="form.title"
                type="text"
                class="form-control form-control-sm"
              >
            </div>
            <div class="form-group">
              <label for="password">Content</label>
              <textarea id="password" v-model="form.content" class="form-control" rows="3" />
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <div>
            <button type="button" class="btn btn-secondary" @click="closeModal">
              {{ $t('close') }}
            </button>
            <button type="button" class="btn btn-primary" @click="submit">
              {{ $t('save') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Form from 'form-backend-validation';

    export default {
        name: 'ProgramModal',

        data: () => ({
            form: new Form({
                title: null,
                content: null,
            }),
        }),

        mounted() {
            window.eventHub.$on('open-program-modal', this.showModal);
        },

        methods: {
            showModal() {
                window.$(this.$el).modal()
            },

            closeModal() {
                window.$(this.$el).modal('hide');
            },

            submit() {
                window.axios.post('http://localhost:8000/programs');

                window.toastr.success(this.$i18n.t('exercises.messages.add'));
            }

        }
    }
</script>