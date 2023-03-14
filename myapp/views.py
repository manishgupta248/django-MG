from django.shortcuts import render
from django.views.generic import TemplateView, CreateView, UpdateView, ListView, DeleteView, DetailView
from .models import Notice
from .forms import NoticeForm
from django.urls import reverse_lazy

# Create your views here.
def home(request):
    return render(request,'home.html',{})

# def index(request):
#     return render(request,'frontend/index.html',{})

class index(TemplateView):
    template_name = "frontend/index.html"
    def get_context_data(self, **kwargs):
        return ({'name':'Manish'})
    
#====================================================================
class NoticeListView(ListView):
    model = Notice
    template_name = "notices/notice-list.html"

class NoticeCreateView(CreateView):
    model = Notice
    form_class = NoticeForm
    template_name = "create.html"

class NoticeUpdateView(UpdateView):
    model = Notice
    fields =['subject', 'notice_date', 'notice_copy',]
    template_name = "create.html"

class NoticeDetailView(DetailView):
    model = Notice
    template_name = "notices/notice.html"

class NoticeDeleteView(DeleteView):
    model = Notice
    template_name = "notices/notice-delete.html"
    success_url = reverse_lazy('notice_list')


