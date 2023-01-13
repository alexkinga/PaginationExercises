import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { map, switchMap} from 'rxjs/operators';
import {JobPostModel} from "../../models/job-post.model";
import {JobPostService} from "../../services/job-post.service";

@Component({
  selector: 'app-search-route-multi-jobs',
  styleUrls: ['./search-route-multi-jobs.component.scss'],
  templateUrl: './search-route-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchRouteMultiJobsComponent {
  readonly form: FormGroup = new FormGroup({
    term: new FormControl()
  });
  readonly searchTerm: Observable<string> = this._activatedRoute.queryParams.pipe(
    map((params) => params['search'])
  )
  readonly filteredJobs$: Observable<JobPostModel[]> = this.searchTerm.pipe(
    switchMap((data) =>
      this._jobPostService.getAll().pipe(
        map((jobs) =>
          jobs.filter((job) =>
            job.description.toLowerCase().includes(data?.toLowerCase()) ||
            job.title.toLowerCase().includes(data?.toLowerCase())
          ))
      ))
  )
  constructor(private _jobPostService: JobPostService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  onFormSubmitted(form: FormGroup): void {
    this._router.navigate([], {
      queryParams: {
        search: form.value.term
      }})
  }
}
