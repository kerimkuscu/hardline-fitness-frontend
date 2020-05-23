<template>
  <div class="d-inline">
    <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#programModal">
      {{ $t('exercises.add') }}
    </button>

    <div
      id="#programModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="programModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="programModalLabel" class="modal-title">
              {{ $t('exercises.add') }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
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
              <div class="form-group">
                <label for="author">Author</label>
                <select id="author" v-model="form.author_id" class="form-control">
                  <option v-for="author in authors" :key="author.value" :value="author.value">
                    {{ author.text }}
                  </option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
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

        props: {
            token: {
                type: String,
                default: null,
            }
        },

        data: () => ({
            form: new Form({
                title: null,
                content: null,
                author_id: null
            }),

            authors: [],
        }),

        mounted() {
            this.getAuthors();
        },

        methods: {
            submit() {
                const config = {
                    headers: { Authorization: `Bearer ${this.token}` }
                };

                window.axios.post('http://localhost:8000/programs', this.form,  config);

                window.toastr.success(this.$i18n.t('exercises.messages.add'));

                window.eventHub.$emit('update-programs');
            },

            async getAuthors() {
                const response = await window.axios.get('http://localhost:8000/users');

                let data = []
                response.data.forEach(item => {
                    data.push({ text: item.nickname, value: item.id });
                });

                this.authors = [{ value: null, text: this.$i18n.t('exercises.select') }, ...data];
            }
        }
    }
</script>