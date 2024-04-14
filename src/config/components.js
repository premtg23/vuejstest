import Vue from "vue";
import ParentComponent from "@/components/Parent-child/ParentComponent";
import ChildComponent from "@/components/Parent-child/ChildComponent";
import ParentComponent2 from "@/components/Child-Parent/ParentComponent2";
import ChildComponent2 from "@/components/Child-Parent/ChildComponent2";
import ChildComponentA from "@/components/Child-Child/ChildComponentA";
import ChildComponentB from "@/components/Child-Child/ChildComponentB";
import ParentComponent3 from "@/components/Child-Child/ParentComponent3";
import usersList from "@/components/usersList";
import AppForm from "@/components/AppForm";
import DynamicForm from "@/components/DynamicForm";


Vue.component("ParentComponent", ParentComponent);
Vue.component("ChildComponent", ChildComponent);
Vue.component("ParentComponent2", ParentComponent2);
Vue.component("ChildComponent2", ChildComponent2);
Vue.component("ChildComponentA", ChildComponentA);
Vue.component("ChildComponentB", ChildComponentB);
Vue.component("ParentComponent3", ParentComponent3);
Vue.component("usersList", usersList);
Vue.component("AppForm", AppForm);
Vue.component("DynamicForm", DynamicForm);